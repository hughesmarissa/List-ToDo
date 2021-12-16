import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Tasks for Today */}
      <View style={styles.taskWrapper}>
          <Text style={styles.section}>To-Do</Text>
          <View style={styles.items}>
              {/* tasks */}
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9DAD51',
  },
  taskWrapper: {
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  section: { //title
    fontSize: 24,
    fontWeight: 600,
  },
  items: {

  },
});
