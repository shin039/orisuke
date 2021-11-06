// -----------------------------------------------------------------------------
// スケールマスタ
// -----------------------------------------------------------------------------

// Scale List
export const SC_SCALES = [
  {code: 'kujira', scale: 3.789},
  {code: 'inch'  , scale: 2.54},
  {code: 'cm'    , scale: 1.0},
]

// Default Language
export const SC_DEFAULT = 'kujira';

// Get Locale Setting
export function getScale(code){
  const sc_code = code || SC_DEFAULT;
  const sc_src  = (SC_SCALES.filter(record => record.code == sc_code))[0];
  return sc_src;
}
