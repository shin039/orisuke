// -----------------------------------------------------------------------------
// Style Sheet Define
// -----------------------------------------------------------------------------
import { StyleSheet }    from 'react-native';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Const
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const palet = {
  basic : "#FDFDFD",
  dark  : "#215270",
  middle: "#85C3D8",
  light : "#C0FFFA",
  accent: "#FCB612",
  notice: "#F76369",
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Container
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const getContainerStyle = () => { return StyleSheet.create(st_container) }

const st_container = {
  container: {
    flex           : 1,
    backgroundColor: palet.basic,
    alignItems     : 'stretch',
    justifyContent : 'flex-start',
  },
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Drawer Menu
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const getDrawerStyle = () => {
  return {
    drawer: {
      drawerLabelStyle           : {color: palet.basic},
      drawerStyle                : {backgroundColor: palet.dark},
      drawerActiveBackgroundColor: palet.notice,
    },
    closeBtn: {color: palet.middle}
  };
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Header
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const getHeaderStyle = () => {
  return {headerTintColor: palet.basic, headerStyle: {backgroundColor: palet.dark}};
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Common Components
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const getCommonStyle = () => { return StyleSheet.create(st_common) }

const st_common = {
  label  : {fontSize: 14, color: palet.basic, backgroundColor: palet.accent, paddingLeft: 10, padding: 5 },
  t_menu : {textDecorationLine: "underline", color: palet.middle},
  v_flex : {flex: 1, flexDirection: 'row', justifyContent: 'flex-start'},
}

