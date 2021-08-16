// -----------------------------------------------------------------------------
// Import from Native
// -----------------------------------------------------------------------------
import React, {useEffect}      from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
}                              from '@react-navigation/drawer';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Import Redux
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store }                              from 'orisuke/src/redux/Store';
import { setLocale }                          from 'orisuke/src/redux/Action';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Import from Orisuke
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// TODO: 動的読み込みにしたい
import _Library    from 'orisuke/src/screen/_Library';
import CountCalc   from 'orisuke/src/screen/CountCalc';
import LengthCalc  from 'orisuke/src/screen/LengthCalc';
import Settings    from 'orisuke/src/screen/Settings';

import {fetchLocaleCode}  from 'orisuke/src/asyncStorage';
import {getLocale}        from 'orisuke/src/locale';

// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------
// Extra Menu For Drawer.Navigator
function ExMenu(props){

  return (
      <DrawerContentScrollView {...props}>
        {/* Draw.Screenの子要素 */}
        <DrawerItemList {...props} />

        {/* DEBUG:Reload Button */}
        <DrawerItem label="Close Menu" onPress={() => {props.navigation.closeDrawer();}} />
      </DrawerContentScrollView>
    );
}

// Init Function on After Render
function init(param){
  const dispatch = param.dispatch;

  // ロケールを設定ファイルから取得し、reduxにdiaptchする。
  fetchLocaleCode( code => { const Lc = getLocale(code); dispatch(setLocale(Lc)) });
}

// Drawer Navigater
function DrawScreen(){
  const Drawer   = createDrawerNavigator();
  const Lc       = useSelector(state => state.locale);
  const dispatch = useDispatch();

  // 初期設定
  const param = {dispatch: dispatch};
  useEffect(() => { init(param) },　[]);

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <ExMenu {...props} />}>
        <Drawer.Screen name={"Library"}           component={_Library}   />
        <Drawer.Screen name={Lc.count_calc.name}  component={CountCalc}  />
        <Drawer.Screen name={Lc.length_calc.name} component={LengthCalc} />
        <Drawer.Screen name={Lc.settings.name}    component={Settings}   />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


// -----------------------------------------------------------------------------
// Main Rendering Function
// -----------------------------------------------------------------------------
export default function Main() {
  return (<Provider store={store}><DrawScreen/></Provider>);
}
