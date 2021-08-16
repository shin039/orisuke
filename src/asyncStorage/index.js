// -----------------------------------------------------------------------------
// Import from Native
// -----------------------------------------------------------------------------
import { AsyncStorage } from 'react-native';

// AsyncStorageに保存しておく格納キー
const KEY={
  locale: "ORSK_LOCALE"
}

// ロケール設定を保存する
export const saveLocaleCode = async (locale) => {
    await AsyncStorage.setItem(KEY.locale, locale);
}

// ロケール設定を取得する
export const fetchLocaleCode = (callback) => {
  (async () => await AsyncStorage.getItem(KEY.locale))()
    .then(code => {callback(code);});
}
