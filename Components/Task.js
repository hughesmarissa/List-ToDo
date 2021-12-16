import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {

    return (
        <View style={styles.item}>

            <View style={styles.leftItem}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                    {/* tasks goes here */}
                    <Text style={styles.itemText}>{props.text}</Text>

            </View>
            <View style={styles.circle}></View>

        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 11,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', //setting this will counter any item on right side of item box
        marginBottom: 20,
    },
    leftItem: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 26,
        height: 24,
        backgroundColor: '#253E5E',
        opacity: .6,
        borderRadius: 5,
        marginRight: 15, //cannot be pushed to the right past this margin
    },
    itemText: {
        maxWidth: '80%', //limiting square dimensions
        fontSize: 32,
    },
    circle: {
        width: 20,
        height: 20,
        borderColor: '#3267AB',
        borderWidth: 2,
        borderRadius: 10,
    },
});

export default Task;