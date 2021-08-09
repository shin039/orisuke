import { StatusBar }                      from 'expo-status-bar';
import React                              from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {st_main}                          from 'orisuke/styles/main_styles';

// -----------------------------------------------------------------------------
// Const
// -----------------------------------------------------------------------------
const styles = StyleSheet.create(st_main);

// -----------------------------------------------------------------------------
// Main
// -----------------------------------------------------------------------------
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button color="#8e8e8e" onPress={()=>{console.log("Push!")}} title="Push!" />
      {/* これはいるのか？ */}
      <StatusBar style="auto" />
    </View>
  );
}

