// -----------------------------------------------------------------------------
// Import
// -----------------------------------------------------------------------------
import React, {useState}            from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Picker }       from 'react-native';
import { Divider }                  from 'react-native-elements';

// Orisuke's Library
import { prepareRender }  from 'orisuke/src/screen/_CommonScreen';
import { getCommonStyle } from 'orisuke/src/styles/main_styles';
import * as LCS           from 'orisuke/src/locale';
import { setLocale }      from 'orisuke/src/redux/Action';
import { saveLocaleCode } from 'orisuke/src/asyncStorage';

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
  const dispatch = useDispatch();
  // state
  const [st_locale, setlocalLocale] = useState(Lc.code);

  // Localeを変更したとき
  const onChangeLocale = (code) => {
    setlocalLocale(code);

    // Redux Set (Sourceをセット)
    const lc = LCS.getLocale(code);
    dispatch(setLocale(lc));

    // Store Storage (Codeをセット)
    saveLocaleCode(code);
  }

  return (
    <View>
      {/* テキスト表示 */}
      <Text style={styles.header}></Text>
      <Text style={styles.label}>{Lc.settings.language}</Text>
        <Picker selectedValue={st_locale} onValueChange={onChangeLocale} >
          {(LCS.LC_LANGUAGES).map((record, idx) => {
            return <Picker.Item key={record.code} label={record.name} value={record.code} />
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
