// -----------------------------------------------------------------------------
// Import from Native
// -----------------------------------------------------------------------------
import React from 'react';
import { StatusBar }           from 'expo-status-bar';
import { StyleSheet, View }    from 'react-native';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Import from Orisuke
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import {st_universal}  from 'orisuke/src/styles/main_styles';

// -----------------------------------------------------------------------------
// Const
// -----------------------------------------------------------------------------
const styles = StyleSheet.create(st_universal);

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
