// -----------------------------------------------------------------------------
// Import from Native
// -----------------------------------------------------------------------------
import React         from 'react';
import { StatusBar } from 'expo-status-bar';
import { View }      from 'react-native';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Import from Orisuke
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import {getContainerStyle}  from 'orisuke/src/styles/main_styles';

// -----------------------------------------------------------------------------
// Const
// -----------------------------------------------------------------------------
const styles = getContainerStyle();

// -----------------------------------------------------------------------------
// Common Function
// -----------------------------------------------------------------------------
export function prepareRender(child_content){
    return (
        <View style={styles.container}>
          {child_content}
        </View>
    );
}
