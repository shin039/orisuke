import React, {useState}            from 'react';
import { View, Text, TextInput, Button, Alert, Picker } from 'react-native';

import { prepareRender } from './_CommonScreen';

import { useSelector }   from 'react-redux';

// -----------------------------------------------------------------------------
// Function
// -----------------------------------------------------------------------------
function stateManShow(){
  Alert.alert(
    "This is Alert ",
    "Push!",
    [
      {text: "OKです"    ,  onPress: ()=>{}},
      {text: "Cancelする", style: 'cancel', onPress: ()=>{}}
    ]
  );
}

// -----------------------------------------------------------------------------
// Main
// -----------------------------------------------------------------------------
export default () => {
  const Lc = useSelector(state => state.locale);

  return prepareRender(
    <>
      {/* テキスト表示 */}
      <Text>{ Lc.count_calc.name }</Text>
      {/* ボタン */}
      <Button color="#8e8e8e" onPress={stateManShow} title="Push!" />
    </>
  );
}
