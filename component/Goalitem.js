import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

function Goalitem(props) {
  return (
      <View style={styles.goalItem}>
    <Pressable
      android_ripple={{ color: "#595759" }}
      onPress={props.onRemoveGoal.bind(this, props.id)}
      style={({pressed})=> pressed && styles.isPressed}
    >
        <Text style={styles.goalText}>{props.text}</Text>
    </Pressable>
      </View>
  );
}

export default Goalitem;

const styles = StyleSheet.create({
  goalItem: {
    borderRadius: 6,
    backgroundColor: "#8c047f",
    color: "white",
    margin: 8,
    padding:6
  },
isPressed:{
    opacity:0.5,
},
  goalText: {
    color: "white",
    fontSize:22,
  },
});
