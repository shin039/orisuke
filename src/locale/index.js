// -----------------------------------------------------------------------------
// 多言語対応
// -----------------------------------------------------------------------------
import en from './en.locale'
import ja from './ja.locale'

// Language List
export const LC_LANGUAGES = [
  {code: 'en', name: 'English', src: en},
  {code: 'ja', name: '日本語' , src: ja},
]

// Default Language
export const LC_DEFAULT = 'en';

// Get Locale Setting
export function getLocale(code){
  const lc_code = code || LC_DEFAULT;
  const lc_src  = (LC_LANGUAGES.filter(record => record.code == lc_code))[0].src;
  return lc_src;
}
