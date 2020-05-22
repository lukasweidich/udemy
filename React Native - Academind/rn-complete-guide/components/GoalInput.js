import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native"

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState("")

    goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal("");
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="cancel" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="add" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    input: {
        width: '80%',
        borderColor: "black",
        borderWidth: .243,
        padding: 2.43,
        marginVertical: "2.43%"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center"
    },
    button: {
        width: "24.3%",
        marginHorizontal: "2.43%"
    }
})

export default GoalInput;