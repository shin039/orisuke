import React, {useState}          from 'react';
import { Text }                   from 'react-native';
import { Input, Button, Divider } from 'react-native-elements';
import { useSelector }            from 'react-redux';

// Orisuke's Library
import { prepareRender }  from 'orisuke/src/screen/_CommonScreen';
import { getCommonStyle } from 'orisuke/src/styles/main_styles';


// -----------------------------------------------------------------------------
// Const
// -----------------------------------------------------------------------------
const styles = getCommonStyle();

// -----------------------------------------------------------------------------
// Main
// -----------------------------------------------------------------------------
export default function LengthCalc() {
  // Redux
  const Lc = (useSelector(state => state.locale)).length_calc;
  
  return prepareRender(
    <>
      {/* テキスト表示 */}
      <Text style={styles.header}></Text>
    </>
  );
}
