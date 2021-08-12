// -----------------------------------------------------------------------------
// Import from Native
// -----------------------------------------------------------------------------
import React from 'react';
import { StatusBar }                      from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer }            from '@react-navigation/native';


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Import from Orisuke
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import {st_main}  from 'orisuke/src/styles/main_styles';

// -----------------------------------------------------------------------------
// Const
// -----------------------------------------------------------------------------
const styles = StyleSheet.create(st_main);

// -----------------------------------------------------------------------------
// Abstract Class
// -----------------------------------------------------------------------------
export default class AbstractScreen extends React.Component {

  // 共通パーツを設定する。
  setComponent(content){
    return (
      <View style={styles.container}>
        {content}
        {/* DEBUG: これはいるのか？ */}
        <StatusBar style="auto" />
      </View>
    );
  }

}

