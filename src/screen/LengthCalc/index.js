import React, {useState}          from 'react';
import { View, Text }             from 'react-native';
import { Input, Button, Divider } from 'react-native-elements';
import { useSelector }            from 'react-redux';
import { DrawerActions }          from '@react-navigation/native';
// Orisuke's Library
import { prepareRender }  from 'orisuke/src/screen/_CommonScreen';
import { getCommonStyle } from 'orisuke/src/styles/main_styles';


// -----------------------------------------------------------------------------
// Const
// -----------------------------------------------------------------------------
const _styles = getCommonStyle();

// Whale Scale
const _kujira = 3.789;

// -----------------------------------------------------------------------------
// Function
// -----------------------------------------------------------------------------

const decimalRound = (src) => (Math.round(src * 10.0) / 10.0);  // 小数点第1桁で四捨五入する

// Calc Count's By Input Value
const onSubmit = (event, Sc, Lc, datas, setters, errSet, err_setters) => {

  const scale = Sc.scale;
  const {density, threads, length} = datas;

  clearAll(err_setters);

  // Input Check
  let inputNum = (density?1:0) + (threads?1:0) + (length?1:0);
  if(inputNum == 0){                   return;}
  if(inputNum == 1){errSet(Lc.error1); return;}
  if(inputNum == 3){errSet(Lc.error2); return;}

  // Update Value Check
  const isAllInputed  = (density && threads && length);
  const isCalcDensity = (! density);
  const isCalcThreads = (! threads);
  const isCalcLength  = (! length );

  // Calcuration
  const calcDensity = () => decimalRound(scale  * threads / length );
  const calcThreads = () => decimalRound(length * density / scale  );
  const calcLength  = () => decimalRound(scale  / density * threads);

  const rslt_density = (isCalcDensity)? calcDensity(): density;
  const rslt_threads = (isCalcThreads)? calcThreads(): threads;
  const rslt_length  = (isCalcLength )? calcLength (): length;

  // Set Value
  setters.density("" + rslt_density);
  setters.threads("" + rslt_threads);
  setters.length ("" + rslt_length );
}

// Reflect React Component by Input Value
const onChangeInput = (value, valSet, errSet, Lc) => {

  // Set Changing Value
  valSet(value);

  // Input Check
  errSet('');
  const ERR_MSG_INPUT = Lc.error;

  const reg_numeric  = /^[0-9.]+$/;
  const result_check = value.match(reg_numeric);

  // Disp Err Message
  (result_check === null) && ((value === '') || errSet(ERR_MSG_INPUT));
}

// Clear All
const clearAll = (setters) => {
  Object.values(setters)
    .forEach((func) => func(''));
}

// -----------------------------------------------------------------------------
// Main
// -----------------------------------------------------------------------------
export default function LengthCalc({navigation}) {


  // Redux
  const L  = useSelector(state => state.locale);
  const Lc = L.length_calc;
  const Sc = useSelector(state => state.scale);
  
  // State
  const [density, setDensity] = useState(''); 
  const [threads, setThreads] = useState(''); 
  const [length , setLength ] = useState(''); 


  const datas   = { density, threads, length }

  const setters = {
    density: setDensity,
    threads: setThreads,
    length : setLength,
  }

  const [err_density, setErrDensity] = useState('');
  const [err_threads, setErrThreads] = useState('');
  const [err_length , setErrLength ] = useState('');

  const err_setters = {
    err_density: setErrDensity,
    err_threads: setErrThreads,
    err_length : setErrLength ,
  }

  // Page Jump Action
  const jumpSetting = DrawerActions.jumpTo('Settings');

  // render
  return prepareRender(
    <>
      <View sytle={_styles.v_flex}>
        <Text style={_styles.label} >{Lc.density} ( <Text style={_styles.t_menu} onPress={() => navigation.dispatch(jumpSetting)}>{L.scale[Sc.code]}</Text> ) </Text>
      </View>
      <Input placeholder={Lc.density} errorStyle={{ color: 'red' }} value={density} errorMessage={err_density} onChangeText={(val) => onChangeInput(val, setDensity, setErrDensity, Lc)} onSubmitEditing={(e) => onSubmit(e, Sc, Lc, datas, setters, setErrDensity, err_setters)} />

      <Text style={_styles.label}>{Lc.threads}</Text>
      <Input placeholder={Lc.threads} errorStyle={{ color: 'red' }} value={threads} errorMessage={err_threads} onChangeText={(val) => onChangeInput(val, setThreads, setErrThreads, Lc)} onSubmitEditing={(e) => onSubmit(e, Sc, Lc, datas, setters, setErrThreads, err_setters)} />

      <Text style={_styles.label}>{Lc.length}</Text>
      <Input placeholder={Lc.length}   errorStyle={{ color: 'red' }} value={length} errorMessage={err_length}  onChangeText={(val) => onChangeInput(val, setLength,   setErrLength, Lc)} onSubmitEditing={(e) => onSubmit(e, Sc, Lc, datas, setters, setErrLength,  err_setters)} />

      <Divider />

      <Button title={Lc.clear} type="clear" onPress={() => {clearAll(setters); clearAll(err_setters);}} />
    </>
  );
}
