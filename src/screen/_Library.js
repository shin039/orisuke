// React
import React, {useState} from 'react';
// React - Redux
import { useSelector }   from 'react-redux';
// User Function
import { prepareRender } from './_CommonScreen';

// React Native
import * as RN from 'react-native';
// React Native Elements
import * as EL from 'react-native-elements';

// -----------------------------------------------------------------------------
// Function
// -----------------------------------------------------------------------------
function stateManShow(){
  RN.Alert.alert(
    "This is Alert ",
    "Push!",
    [
      {text: "OKかも"    ,  onPress: ()=>{}},
      {text: "Cancelする", style: 'cancel', onPress: ()=>{}}
    ]
  );
}

// -----------------------------------------------------------------------------
// Style
// -----------------------------------------------------------------------------
// NOTE: 色確認をシームレスに行うため、ここに記載している。
//       main_style.jsに記載すると、Reloadしないといけないので。
const palet = {
  basic : "#FDFDFD",
  dark  : "#215270",
  middle: "#85C3D8",
  light : "#C0FFFA",
  accent: "#FCB612",
}

// NOTE: StyleSheet.create()による変換が重要。
const style = RN.StyleSheet.create({
  header   : {fontSize: 18, color: palet.basic, backgroundColor: palet.dark, padding: 10},
  label    : {fontSize: 14, color: palet.basic, backgroundColor: palet.accent, paddingLeft: 10, padding: 5 },
  textInput: {fontSize: 14,  paddingLeft: 10, padding: 5},
  toButton : {backgroundColor: palet.light, padding: 10},
  tbText   : {color: palet.dark, textAlign: 'center'},
  // EL
  cardrow  : {flexDirection: 'row'},
});

// -----------------------------------------------------------------------------
// Main
// -----------------------------------------------------------------------------
export default () => {
  const Lc = useSelector(state => state.locale);

  // Define State
  const [st_text, onChangeText] = useState("text input");
  const [st_item, onChangeItem] = useState(1);

  return prepareRender(
    <>
      {/* --------------------------------------------------- */}
      {/* React Native                                        */}
      {/* --------------------------------------------------- */}
      <RN.View>
        {/* テキスト表示 */}
        <RN.Text style={style.header}>React Native</RN.Text>

        {/* テキスト入力 */}
        <RN.Text style={style.label}>Text Input</RN.Text>
        <RN.TextInput style={style.textInput} onChangeText={onChangeText} value={st_text} />

        {/* 選択 */}
        <RN.Text style={style.label}>Picker</RN.Text>
        <RN.Picker selectedValue={st_item} onValueChange={onChangeItem} >
          <RN.Picker.Item label="A" value={1} />
          <RN.Picker.Item label="B" value={2} />
          <RN.Picker.Item label="C" value={3} />
        </RN.Picker>

        {/* ボタン */}
        <RN.Text style={style.label}>Button</RN.Text>
        <RN.Button color={palet.middle} onPress={stateManShow} title="Push!" />

        {/* ボタン2 */}
        <RN.Text style={style.label}>TouchableOpacity</RN.Text>
        <RN.TouchableOpacity onPress={stateManShow} style={style.toButton}>
          <RN.Text style={style.tbText}>Push!!</RN.Text>
        </RN.TouchableOpacity>

      </RN.View>

      {/* --------------------------------------------------- */}
      {/* React Native Elements                               */}
      {/* --------------------------------------------------- */}
      <RN.View>
        {/* デバイダー */}
        <EL.Divider orientation="horizontal" width={5} color="#555" />

        {/* ヘッダー */}
        <EL.Text style={style.header}>React Native Elements</EL.Text>

        {/* カード */}
        <EL.Card>
          <EL.Card.Title>This is Card!</EL.Card.Title>
          <EL.Card.Divider/>
          <RN.View style={style.cardrow}>
            {/* アイコン */}
            <EL.Icon style={{paddingRight: 5}} name="paw" type='font-awesome'/>
            <EL.Text style={style.label}>React Native Elements</EL.Text>
          </RN.View>
        </EL.Card>

        {/* カード */}

      </RN.View>
    </>
  );
}
