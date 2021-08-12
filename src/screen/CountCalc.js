import React            from 'react';
import { Text, Button } from 'react-native';

import AbstractScreen from './AbstractScreen';

// -----------------------------------------------------------------------------
// Main
// -----------------------------------------------------------------------------
export default class  CountCalc extends AbstractScreen {

  // - - - - - - - - - - - - - - - - - - - - - -
  // Render
  // - - - - - - - - - - - - - - - - - - - - - -
  render (){
    return super.setComponent(this.makeJSX());
  }

  // - - - - - - - - - - - - - - - - - - - - - -
  // Make JSX
  // - - - - - - - - - - - - - - - - - - - - - -
  makeJSX(){
    return (
      <>
      <Text>Count Calc</Text>
      <Button color="#8e8e8e" onPress={()=>{console.log("Push!")}} title="Push!" />
      </>
    );
  }

}

