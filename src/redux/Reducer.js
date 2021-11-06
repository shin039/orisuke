// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// Redux Reducer
// -------------------------------------------------------------------------------------------------------------------------------------------------------------
import { combineReducers } from 'redux'
import { ACTION }          from './Action';

// 初期値設定のため
import {getLocale} from 'orisuke/src/settings/locale';
import {getScale}  from 'orisuke/src/settings/scale';

// - - - - - - - - - - - - - - - - - - - - - - - 
// Reducers 
// - - - - - - - - - - - - - - - - - - - - - - - 
const locale  = (state = getLocale(), action) => {
  switch(action.type) {
    case ACTION.SET_LOCALE: return {...state, ...action.code};
    default               : return state;
  }
}

const scale  = (state = getScale(), action) => {
  switch(action.type) {
    case ACTION.SET_SCALE: return {...state, ...action.code};
    default              : return state;
  }
}

const display = (state = {}, action) => {
  switch(action.type) {
    case ACTION.SET_DISPLAY_MODE: return {...state, ...action.mode};
    default                     : return state;
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - 
// Root Reducers
// - - - - - - - - - - - - - - - - - - - - - - - 
const reducers = combineReducers({
  locale,
  scale,
  display
})

export default reducers;
