import { useState } from "react";
import { Button, StyleSheet, View, FlatList } from "react-native";
import GoalInput from "./component/GoalInput";
import Goalitem from "./component/Goalitem";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const ModalVisibilityHandler = () => {
    setModalIsVisible(true);
  };

  const goalInputHandler = (enterTextInput) => {
    setGoalList((prevGoals) => [
      ...prevGoals,
      { text: enterTextInput, id: Math.random().toString() },
    ]);
    CloseModalHandler();
  };

  const removeGoalHandler = (id) => {
    setGoalList((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== id);
    });
  };

  const CloseModalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <View style={styles.appContainer}>
      <Button title="Add a Goal" onPress={ModalVisibilityHandler} />
      <GoalInput
        visible={modalIsVisible}
        onClose={CloseModalHandler}
        onAddGoal={goalInputHandler}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={goalList}
          renderItem={(itemData) => {
            return (
              <Goalitem
                text={itemData.item.text}
                id={itemData.item.id}
                onRemoveGoal={removeGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 40,
  },
  listContainer: {
    flex: 3,
    marginTop: 50,
  },
});
