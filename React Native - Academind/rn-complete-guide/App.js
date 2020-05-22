import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, View, Text, ScrollView, FlatList } from 'react-native';
import GoalItem from "./components/GoalItem"
import GoalInput from "./components/GoalInput"

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  addGoalHandler = (goalText) => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalText }]);
    setIsAddMode(false)
  }



  cancelGoalAddHandler = () => {
    setIsAddMode(false)
  }

  removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    }
    )
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAddHandler} />
      <FlatList
        style={styles.flatList}
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem onDelete={removeGoalHandler.bind(this, itemData.item.id)} text={itemData.item.value} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  flatList: {
    padding: "2%"
  }
});