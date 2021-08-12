import React    from 'react';
import { Text } from 'react-native';

import AbstractScreen from './AbstractScreen';

// -----------------------------------------------------------------------------
// Main
// -----------------------------------------------------------------------------
export default class LengthCalc extends AbstractScreen {
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
    return ( <Text>Length Calc</Text>);
  }
}

