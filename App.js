import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, ScrollView, View, TextInput, Keyboard } from 'react-native';
import Task from './Components/Task';

export default function App() {
    //create state
    const [task, setTask] = useState(''); 
    //store user input tasks in array
    const [taskItems, setTaskItems] = useState([]);

    //handle function
    const handleAddTask = () => { 
        //console.log(task); //log task stored in the state
        setTaskItems([...taskItems, task]); //keeps exisiting tasks, then includes new task 
        setTask(''); //clears input area for new user input tasks
        Keyboard.dismiss();
    }

    //to delete todo tasks function
    const completedTask = (index) => {
        let itemsCopy = [...taskItems]; //takes in tasks arrays & store in itemsCopy
        itemsCopy.splice(index, 1); //remove item from array, then store back in itemsCopy
        setTaskItems(itemsCopy); //new itemsCopy array is stored in setTaskItems
    }

    return (
    <View style={styles.container}>

      {/* Tasks for Today */}
      <ScrollView style={styles.taskWrapper}>
          <Text style={styles.section}>To-Do</Text>

          <View style={styles.items}>
              {/* tasks output */}
              {
                  taskItems.map((item, index) => {
                        return (
                            <TouchableOpacity
                                onPress={() => completedTask(index)} //pass in index to assure right task is deleted
                                key={index}>
                                {/* returns user input tasks, use *key* from mapping, move key to parent component */}
                                <Task text={item} />
                            </TouchableOpacity>
                        )
                      
                  })
              } 
              {/* <Task text={"Task 1"} />
              <Task text={"Task 2"} />
              <Task text={"Task 3"} />
              <Task text={"Task 4"} />
              <Task text={"Task 5"} /> */}
          </View>

      </ScrollView>

        {/* write a task */}
        <KeyboardAvoidingView
            // /* need to define behavior */
            behavior={Platform.OS === 'ios' ? "padding" : "height"}
            style={styles.writeWrapper}
        >
            <TextInput 
                style={styles.input} 
                placeholder={'Write a task'} 
                value={task} //set task to be new text/ sets the new state when onChangeText changes
                onChangeText={text => setTask(text)} //every time text changes
            />
            {/* pass function to onPress */}
            <TouchableOpacity onPress={() => handleAddTask()}> 
                <View style={styles.addWrapper}>
                    <Text style={styles.addText}>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3267AB',
    },
    taskWrapper: {
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    section: { //title
        fontSize: 32,
        fontWeight: '900',
        color: 'white',
    },
    items: {
        marginTop: 25,
    },
    writeWrapper: {
        position: 'absolute', 
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around', //will keep  left/right separated with padding around
        alignItems: 'center',
    },
    input: {
        paddingVertical: 22,
        paddingHorizontal: 15,
        width: 250,
        backgroundColor: 'white',
        borderRadius: 12,
        borderColor: '#3267AB',
        borderWidth: 3,
        fontSize: 22,
    },
    addWrapper: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#3267AB',
        borderWidth: 3,
    },
    addText: {
        fontSize: 22,
    },
});
