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

// coef => coefficient 係数。 
const _cotton =  5315.0;
const _linen  = 14882.0;
const _wool   =  9000.0;
const _kujira =   3.789;

// -----------------------------------------------------------------------------
// Function
// -----------------------------------------------------------------------------
const decimalRound = (src)       => (Math.round(src * 10.0) / 10.0);  // 小数点第1桁で四捨五入する
const calcDenier   = (src, coef) => decimalRound(coef   / src);       // src: 各番手の数値, coef: 係数
const calcCotton   = (denier)    => decimalRound(_cotton / denier);
const calcWool     = (denier)    => decimalRound(_wool   / denier);
const calcLinen    = (denier)    => decimalRound(_linen  / denier);

// Calc Count's By Input Value
const onSubmit = (event, exec_bit, setters, coef) => {
  const val = parseFloat(event.nativeEvent.text);

  // At first, calc denier.
  const denier = (exec_bit & 1)? calcDenier(val, coef): val;

  const cotton = (exec_bit & 2)? calcCotton(denier): val;
  const wool   = (exec_bit & 4)? calcWool  (denier): val;
  const linen  = (exec_bit & 8)? calcLinen (denier): val;

  // Set Value
  setters.denier("" + denier);
  setters.cotton("" + cotton);
  setters.wool  ("" + wool);
  setters.linen ("" + linen);

}

// Reflect React Component by Input Value
const onChangeInput = (value, valSet, errSet) => {
  // Set Changing Value
  valSet(value);

  // Input Check
  errSet('');
  const ERR_MSG_INPUT = "ERROR INPUT";

  const reg_numeric  = /^[0-9.]+$/;
  const result_check = value.match(reg_numeric);

  // Disp Err Message
  (result_check === null) && ((value === '') || errSet(ERR_MSG_INPUT));
}

// Clear All
const clearAll = (setters) => {
  setters.denier('');
  setters.cotton('');
  setters.wool  ('');
  setters.linen ('');
}

// -----------------------------------------------------------------------------
// Main
// -----------------------------------------------------------------------------
export default () => {
  // Redux
  const Lc = (useSelector(state => state.locale)).count_calc;

  // State
  const [denier, setDenier] = useState(''); 
  const [cotton, setCotton] = useState(''); 
  const [wool  , setWool  ] = useState(''); 
  const [linen , setLinen ] = useState(''); 

  const setters = {
    denier: setDenier,
    cotton: setCotton,
    wool  : setWool,
    linen : setLinen
  }

  const [err_denier, setErrDenier] = useState(''); 
  const [err_cotton, setErrCotton] = useState(''); 
  const [err_wool  , setErrWool]   = useState(''); 
  const [err_linen , setErrLinen]  = useState(''); 

  // render
  return prepareRender(
    <>
      {/* テキスト表示 */}
      <Text style={styles.header}></Text>

      <Text style={styles.label}>{Lc.denier}</Text>
      <Input placeholder={Lc.denier} errorStyle={{ color: 'red' }} value={denier} errorMessage={err_denier} onChangeText={(val) => onChangeInput(val, setDenier, setErrDenier)} onSubmitEditing={(e) => onSubmit(e, 14, setters)} />

      <Text style={styles.label}>{Lc.cotton}</Text>
      <Input placeholder={Lc.cotton} errorStyle={{ color: 'red' }} value={cotton} errorMessage={err_cotton} onChangeText={(val) => onChangeInput(val, setCotton, setErrCotton)} onSubmitEditing={(e) => onSubmit(e, 13, setters, _cotton)} />

      <Text style={styles.label}>{Lc.wool}</Text>
      <Input placeholder={Lc.wool}   errorStyle={{ color: 'red' }} value={wool}   errorMessage={err_wool}   onChangeText={(val) => onChangeInput(val, setWool,   setErrWool)}   onSubmitEditing={(e) => onSubmit(e, 11, setters, _wool)} />

      <Text style={styles.label}>{Lc.linen}</Text>
      <Input placeholder={Lc.linen}  errorStyle={{ color: 'red' }} value={linen}  errorMessage={err_linen}  onChangeText={(val) => onChangeInput(val, setLinen,  setErrLinen)}  onSubmitEditing={(e) => onSubmit(e,  7, setters, _linen)} />

      <Divider />

      <Button title={Lc.clear} type="clear" onPress={() => clearAll(setters)} />
    </>
  );
}
