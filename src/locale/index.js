// -----------------------------------------------------------------------------
// 多言語対応
// -----------------------------------------------------------------------------
import en from './en.locale'
import ja from './ja.locale'

// Language List
export const LC_LANGUAGES = {
  en: {name: '英語'  , src: en},
  ja: {name: '日本語', src: ja}
}

// Default Language
export const LC_DEFAULT = 'en';

// Get Locale Setting
export function getLocale(code){
  const lc_code = code || LC_DEFAULT;
  return LC_LANGUAGES[lc_code].src;
}
