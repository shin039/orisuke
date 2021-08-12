// -----------------------------------------------------------------------------
// Import from Native
// -----------------------------------------------------------------------------
import React                              from 'react';
import { NavigationContainer }            from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
}                                         from '@react-navigation/drawer';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Import from Orisuke
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import CountCalc  from 'orisuke/src/screen/CountCalc';
import LengthCalc from 'orisuke/src/screen/LengthCalc';

// -----------------------------------------------------------------------------
// Const
// -----------------------------------------------------------------------------
const Drawer = createDrawerNavigator();

// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------
function DrawScreen(){
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="CountCalc"  component={CountCalc}  />
      <Drawer.Screen name="LengthCalc" component={LengthCalc} />
    </Drawer.Navigator>
  );
}

// -----------------------------------------------------------------------------
// Main
// -----------------------------------------------------------------------------
export default function Main() {
  return (
      <NavigationContainer>
        <DrawScreen />
      </NavigationContainer>
  );
}

