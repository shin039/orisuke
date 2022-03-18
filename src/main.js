// -----------------------------------------------------------------------------
// Import from Native
// -----------------------------------------------------------------------------
import React, {useEffect}      from 'react';
import { StatusBar }           from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Import Redux
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store }                              from 'orisuke/src/redux/Store';
import { setLocale, setScale }                from 'orisuke/src/redux/Action';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Import from Orisuke
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// TODO: 動的読み込みにしたい
import _Library    from 'orisuke/src/screen/_Library';
import CountCalc   from 'orisuke/src/screen/CountCalc';
import LengthCalc  from 'orisuke/src/screen/LengthCalc';
import Settings    from 'orisuke/src/screen/Settings';

import {fetchLocaleCode, fetchScaleCode} from 'orisuke/src/settings/asyncStorage';
import {getLocale}                       from 'orisuke/src/settings/locale';
import {getScale}                        from 'orisuke/src/settings/scale';

import {getHeaderStyle, getDrawerStyle} from 'orisuke/src/styles/main_styles';

// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------
// Extra Menu For Drawer.Navigator
function ExMenu(props){
  const Lc          = useSelector(state => state.locale);
  const drawerStyle = getDrawerStyle();

  return (
    <DrawerContentScrollView {...props}>
    {/* Draw.Screenの子要素 */}
    <DrawerItemList {...props} />

    {/* Close Button */}
    <DrawerItem 
      label={Lc.ex_menu.close}
      onPress={() => {props.navigation.closeDrawer();}}
      labelStyle={{...drawerStyle.closeBtn}}
    />
    </DrawerContentScrollView>
  );
}

// Init Function on After Render
function init(param){
  const dispatch = param.dispatch;

  // ロケールを設定ファイルから取得し、reduxにdiaptchする。
  fetchLocaleCode( code => { const Lc = getLocale(code); dispatch(setLocale(Lc)) });
  fetchScaleCode ( code => { const Sc = getScale(code) ; dispatch(setScale(Sc))  });
}

// Drawer Navigater
function DrawScreen(){
  const Drawer      = createDrawerNavigator();
  const Lc          = useSelector(state => state.locale);
  const dispatch    = useDispatch();
  const headerStyle = getHeaderStyle();
  const drawerStyle = getDrawerStyle();

  // 初期設定
  const param = {dispatch: dispatch};
  useEffect(() => { init(param) },　[]);

  return (
    <>
      {/* Status Bar Setting */}
      <StatusBar/>
      {/* Navigation and Main Content */}
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{...drawerStyle.drawer}} drawerContent={(props) => <ExMenu {...props} />}
      >
          <Drawer.Screen name={"CountCalc"}  options={{title: Lc.count_calc.name,  ...headerStyle}} component={CountCalc}  />
          <Drawer.Screen name={"LengthCalc"} options={{title: Lc.length_calc.name, ...headerStyle}} component={LengthCalc} />
          <Drawer.Screen name={"Settings"}   options={{title: Lc.settings.name,    ...headerStyle}} component={Settings}   />
          {/*<Drawer.Screen name={"Library"}    options={{title: Lc._library.name}}    component={_Library}   />*/}
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}


// -----------------------------------------------------------------------------
// Main Rendering Function
// -----------------------------------------------------------------------------
export default function Main() {
  return (<Provider store={store}><DrawScreen/></Provider>);
}

