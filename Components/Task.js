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
        padding: 18,
        borderRadius: 11,

    },
    leftItem: {

    },
    square: {
        width: 26,
        height: 24,
        backgroundColor: 'gray',
        opacity: .6,

    },
    itemText: {

    },
    circle: {

    },
});

export default Task;