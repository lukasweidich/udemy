import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete}>
            <View style={styles.listItem}>
                <Text>{props.text}</Text>
            </View>
        </TouchableOpacity>)
}

const styles = StyleSheet.create({
    listItem: {
        padding: "1%",
        backgroundColor: "#ccc",
        borderColor: "black",
        borderWidth: 1,
        marginVertical: "2.43%"
    }
})

export default GoalItem;