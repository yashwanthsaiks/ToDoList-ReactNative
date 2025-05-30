
import {StyleSheet,Text,Pressable, View} from "react-native";
const GoalRender = (props) => {
  const GoalDelete = () => {
    props.onPressDelete(props.itemIndex);  
  };
  
  
    return (
      <View style={styles.GoalContainer}>
           <Pressable 
           android_ripple={{color:"white"}} 
           onPress={GoalDelete}>
           <Text  style={styles.GoalText}>{props.text}</Text> 
           </Pressable>
      </View>
     
         
    );
};

const styles = StyleSheet.create({
  GoalContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:10,
    
    
  },
  GoalText:{
    backgroundColor:"#d7e8f8",
    padding:10,
    fontSize: 15,
    
    fontWeight:"bold",
  }
})
export default GoalRender;