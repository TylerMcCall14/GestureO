import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const Task = ({ task="This is the task name", index, completeTask }) => {

    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.circle}></View>
                <Text style={styles.itemText}>{task}</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => completeTask(index)}><Text>Delete</Text></TouchableOpacity>
        </View>
    )
}

Task.propTypes = {
    task: PropTypes.string,
    index: PropTypes.number.isRequired,
    completeTask: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    circle: {
        width: 24,
        height: 24,
        backgroundColor: "#FF6F91",
        opacity: 0.4,
        borderRadius: 50,
        marginRight: 15,

    },
    itemText: {
        maxWidth: "75%",
    },
    btn: {
        width: 50,
        height: 25,
        borderColor: "#ffc75f",
        borderWidth: 2,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
})

export default Task;