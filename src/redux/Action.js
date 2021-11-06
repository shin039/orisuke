// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// Redux Action
// -------------------------------------------------------------------------------------------------------------------------------------------------------------
export const ACTION = {
  SET_LOCALE      : "SET_LOCALE",
  SET_SCALE       : "SET_SCALE",
  SET_DISPLAY_MODE: "SET_DISPLAY_MODE"
}

// Action Creaters
export const setLocale      = code => ({ type: ACTION.SET_LOCALE,       code: code });
export const setScale       = code => ({ type: ACTION.SET_SCALE,        code: code });
export const setDisplayMode = mode => ({ type: ACTION.SET_DISPLAY_MODE, mode: mode });
