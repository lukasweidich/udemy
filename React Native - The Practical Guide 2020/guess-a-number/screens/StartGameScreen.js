import React, { useState } from "react"
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from "react-native"
import Card from "../components/Card"
import Input from "../components/Input"
import Colors from "../constants/Colors"
import NumberContainer from "../components/NumberContainer"

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText)
    }

    const resetInputHandler = () => {
        setEnteredValue("");
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        /**
         * State changes are executed together.
         * Since the next render cycle will update the value,
         * it is still accessible in this cycle.
         *  */
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("Invalid Number!", "Number has to be a number between 1 and 99.", [{ text: "OK", style: "destructive", onPress: resetInputHandler }])
        }
        setSelectedNumber(chosenNumber);
        setEnteredValue("");
        setConfirmed(true);
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>You selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button color={Colors.primary} title="START GAME" onPress={() => props.onStartGame(selectedNumber)} />
            </Card>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text>Start a new Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input onChangeText={numberInputHandler} value={enteredValue} style={styles.input} blurOnSubmit autoCapitalize="none" autoCorrect={false} keyboardType="number-pad" maxLength={2} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button color={Colors.btNegative} title="Reset" onPress={resetInputHandler}></Button></View>
                        <View style={styles.button}><Button color={Colors.btPositive} title="Confirm" onPress={confirmInputHandler}></Button></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: "center"
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: "center"
    }
});

export default StartGameScreen;