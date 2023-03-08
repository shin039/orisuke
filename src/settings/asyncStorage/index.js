// -----------------------------------------------------------------------------
// Import from Native
// -----------------------------------------------------------------------------
import AsyncStorage from '@react-native-async-storage/async-storage';

// AsyncStorageに保存しておく格納キー
const KEY={
  locale: "ORSK_LOCALE",
  scale : "ORSK_SCALE",
}


// ----------------------------------------
// ロケール
// ----------------------------------------
// ロケール設定を保存する
export const saveLocaleCode = async (locale) => { await AsyncStorage.setItem(KEY.locale, locale); }

// ロケール設定を取得する
export const fetchLocaleCode = (callback) => {
  (async () => await AsyncStorage.getItem(KEY.locale))().then(code => {callback(code);});
}

// ----------------------------------------
// スケール
// ----------------------------------------
// スケール設定を保存する
export const saveScaleCode = async (scale) => { await AsyncStorage.setItem(KEY.scale, scale); }

// スケール設定を取得する
export const fetchScaleCode = (callback) => {
  (async () => await AsyncStorage.getItem(KEY.scale))().then(code => { callback(code);});
}
