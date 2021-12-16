import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './Components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Tasks for Today */}
      <View style={styles.taskWrapper}>
          <Text style={styles.section}>To-Do</Text>
          <View style={styles.items}>
              {/* tasks */}
              <Task text={"Task 1"} />
              <Task text={"Task 2"} />
              <Task text={"Task 3"} />
              <Task text={"Task 4"} />
              <Task text={"Task 5"} />
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3267AB',
  },
  taskWrapper: {
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  section: { //title
    fontSize: 32,
    fontWeight: '600',
  },
  items: {
    marginTop: 25,
  },
});
