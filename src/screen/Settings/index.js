// -----------------------------------------------------------------------------
// Import
// -----------------------------------------------------------------------------
import React, {useState}            from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Picker }       from 'react-native';
import { Divider }                  from 'react-native-elements';

// Orisuke's Library
import { prepareRender }                 from 'orisuke/src/screen/_CommonScreen';
import { getCommonStyle }                from 'orisuke/src/styles/main_styles';
import * as LCS                          from 'orisuke/src/settings/locale';
import * as SCS                          from 'orisuke/src/settings/scale';
import { setLocale, setScale }           from 'orisuke/src/redux/Action';
import { saveLocaleCode, saveScaleCode } from 'orisuke/src/settings/asyncStorage';

// -----------------------------------------------------------------------------
// Const
// -----------------------------------------------------------------------------
const styles = getCommonStyle();

// -----------------------------------------------------------------------------
// Function
// -----------------------------------------------------------------------------

// SettingsのHTML定義
const makeHtml = () => {
  // redux
  const Lc       = useSelector(state => state.locale);
  const Sc       = useSelector(state => state.scale);

  const dispatch = useDispatch();
  // state
  const [st_locale, setlocalLocale] = useState(Lc.code);
  const [st_scale , setlocalScale]  = useState(Sc.code);

  // - - - - - - - - - - - - - - - - 
  // Localeを変更したとき
  // - - - - - - - - - - - - - - - - 
  const onChangeLocale = (code) => {
    setlocalLocale(code);

    // Redux Set (Sourceをセット)
    const lc = LCS.getLocale(code);
    dispatch(setLocale(lc));

    // Store Storage (Codeをセット)
    saveLocaleCode(code);
  }

  // - - - - - - - - - - - - - - - - 
  // Localeを変更したとき
  // - - - - - - - - - - - - - - - - 
  const onChangeScale = (code) => {

    setlocalScale(code);

    // Redux Set (Sourceをセット)
    const sc = SCS.getScale(code);
    dispatch(setScale(sc));

    // Store Storage (Codeをセット)
    saveScaleCode(code);
  }

  // - - - - - - - - - - - - - - - - 
  // Render
  // - - - - - - - - - - - - - - - - 
  return (
    <View>
      {/* 言語 */}
      <Text style={styles.label}>{Lc.settings.language}</Text>
      <Picker selectedValue={st_locale} onValueChange={onChangeLocale} >
        {(LCS.LC_LANGUAGES).map((record, idx) => {
          return <Picker.Item key={record.code} label={record.name} value={record.code} />
        })}
      </Picker>
      <Divider orientation="horizontal" width={1} />

      {/* スケール */}
      <Text style={styles.label}>{Lc.settings.scale}</Text>
      <Picker selectedValue={st_scale} onValueChange={onChangeScale} >
        {(SCS.SC_SCALES).map((record, idx) => {
          return <Picker.Item key={record.code} label={Lc.scale[record.code]} value={record.code} />
        })}
      </Picker>
      <Divider orientation="horizontal" width={1} />
    </View>
  );
}

// -----------------------------------------------------------------------------
// Main
// -----------------------------------------------------------------------------
export default function Settings() {
  return prepareRender(makeHtml());
}
