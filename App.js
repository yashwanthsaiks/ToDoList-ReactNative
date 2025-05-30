import {View,StyleSheet,FlatList, Button,} from "react-native";
import { useState } from "react";
import GoalRender from "./components/GoalRender";
import GoalInput from "./components/GoalInput";
const App = () => {
  const [GoalList, setGoalList] = useState([]);
  const [ModalVisible, setModalVisible] = useState(false);
  const AddGoalHandler = (enteredGoal) => {
    setGoalList((currentGoals) => [
      ...currentGoals,
       {text:enteredGoal , id:Math.random().toString()},
      ]);
  };
  const DeleteGoalHandler = (GoalId) => {
    setGoalList((currentGoals) => {
     return currentGoals.filter((Goal) => Goal.id !== GoalId);
  });
  };
  
  
  return (
    <View style={styles.AppContainer}>
      <Button 
      title="ADD GOAl!" 
      color={"grey"}
      onPress={() => setModalVisible(true)}
      />
      {ModalVisible && <GoalInput OnAddGoal={AddGoalHandler} onSetModal={()=>setModalVisible(false)}/>}
      <View style={styles.GoalContainer}>
        <FlatList
          alwaysBounceVertical={true}
          data={GoalList}
          keyExtractor={(item, index) => index.toString()}      
          renderItem={(itemData) => {
            return <GoalRender text={itemData.item.text} onPressDelete={DeleteGoalHandler} itemIndex={itemData.item.id}/>;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    gap: 10,
    paddingHorizontal: 30,
    paddingTop: "25%",
  },
 
  GoalContainer: {
    marginTop: 20,
    borderTopWidth: 2,
    paddingTop: 25,
    gap: 10,
  },

});

export default App;
