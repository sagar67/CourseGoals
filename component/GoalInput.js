import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enterTextInput, setEnterTextInput] = useState("");

  const goalChangeHandler = (enteredText) => {
    setEnterTextInput(enteredText);
  };

  function addGoalHandler() {
    if (enterTextInput.trim().length === 0) {
      return alert(`You don't have any goal😢`);
    }
    props.onAddGoal(enterTextInput);
    setEnterTextInput("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.goalinputContainer}>
        <Image
          style={styles.image}
            source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textContainer}
          onChangeText={goalChangeHandler}
          placeholder="Course Goals!"
          value={enterTextInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  goalinputContainer: {
    flex: 1,
    width: "100%",
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // margin: 8,
    backgroundColor: "#8c1280",
  },
  textContainer: {
    borderRadius: 18,
    margin: 8,
    padding: 10,
    width: "90%",
    backgroundColor: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 3,
  },
  button: {
    margin: 8,
    width: 100,
  },
  image: {
    width: 100,
    height: 100,
    // margin:100
  },
});
