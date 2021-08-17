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
// Common Components
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const getCommonStyle = () => { return StyleSheet.create(st_common) }

const st_common = {
  header   : {fontSize: 18, color: palet.basic, backgroundColor: palet.dark, padding: 10},
  label    : {fontSize: 14, color: palet.basic, backgroundColor: palet.accent, paddingLeft: 10, padding: 5 },
}
