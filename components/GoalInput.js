import {StyleSheet,View,TextInput,Button,Modal} from "react-native"
import {useState} from "react"
const GoalInput =(props)=>{
    const [Goal, setGoal] = useState("");
    const TextChangeHandler = (Text) => {
        setGoal(Text);
      };  
    const AddGoalHandler=()=>{
        props.OnAddGoal(Goal);
        setGoal("");
        props.onSetModal();
    }
    const ModalHandler=()=>{
        props.onSetModal();
    }
    return(
      <Modal 
      animationType="slide" 
      visible={props.visible}>
           <View style={styles.TextContainer}>
            <TextInput
            style={styles.TextInput}
            placeholder="Enter the Task...!"
            onChangeText={TextChangeHandler}
            value={Goal}
            ></TextInput>
            <View style={styles.buttonContainer}>
                <Button title="Add GOAL" onPress={AddGoalHandler} />
                <Button title="Cancel" onPress={ModalHandler}/>
            </View>
           
        </View>
      </Modal>
       
    )
}
const styles = StyleSheet.create({
    TextContainer: {
        flexDirection: "column",
        alignItems: "center",
        marginTop: 300,
        gap: 10,
      },
      TextInput: {
        borderColor: "black",
        borderWidth: 1,
        height: 50,
        width: 350,
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
      },
      buttonContainer:{
        flexDirection:"row",
        gap:10,
        marginTop:20
      }
})
export default GoalInput;