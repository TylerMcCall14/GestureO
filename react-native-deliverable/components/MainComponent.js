import React, { useState, useContext } from 'react';
import {
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
    Keyboard,
    KeyboardAvoidingView,
    TextInput,
    ScrollView,
} from 'react-native';

import Task from './Task';
import { DataContext } from './DataProvider';

const MainComponent = () => {
    // HOLDS THE COMPLETE LIST OF CURRENT TASKS
    const [taskItems, setTaskItems] = useContext(DataContext);
    // TASK IS SET BY THE TextInput 
    const [task, setTask] = useState()

    // ADDS A TASK TO taskItems
    const handleAddTask = () => {
        Keyboard.dismiss()
        setTaskItems([...taskItems, task])
        setTask(null)
    }

    // REMOVES A TASK FROM taskItems
    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }

    return(
        <View style={styles.container}>
            { /* TODAYS TASKS */}

            <View style={styles.taskWrapper}>
                <Text style={styles.sectionTitle}>Today's Tasks</Text>
                <ScrollView
                    contentContainerStyle={{flexGrow: 1}}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.items}>
                        {/* THIS IS WHERE ALL THE TASKS GO*/}
                        {
                            taskItems.map((item, index) => {
                                return(
                                    <View key={index}>
                                        <Task completeTask={completeTask} index={index}/>
                                    </View>
                                )
                            })
                        }
                    </View>
                </ScrollView>
            </View>
            <KeyboardAvoidingView style={styles.writeTaskWrapper}>
                    <TextInput style={styles.input} placeholder={"Write a task"} value={task} onChangeText={text => setTask(text)}></TextInput>
                    <TouchableOpacity onPress={() => { handleAddTask() }}>
                        <View style={styles.addWrapper}>
                            <Text style={styles.addText}>+</Text>
                        </View>
                    </TouchableOpacity>
            </KeyboardAvoidingView>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#e8eaed",
    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle:{
        fontSize: 24,
        fontWeight: "bold",
    },
    items:{
        marginTop: 30,
        paddingHorizontal: 10,
    },
    writeTaskWrapper: {
        position: "absolute",
        bottom: 60,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    input: {
        backgroundColor: "#fff",
        width: 250,
        borderRadius: 30,
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderColor: "#c0c0c0",
        borderWidth: 1,
    },
    addWrapper: {
        backgroundColor: "#fff",
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#c0c0c0",

    },
    addText: {
        fontSize: 30,
    },
})

export default MainComponent;