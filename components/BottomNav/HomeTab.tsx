import { FontAwesome } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { Icon } from "native-base";
import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { MainScreen } from "../../screens/MainScreen";
import { ParamList } from "../../types";


const style = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  }
});



type SubProps = StackScreenProps<ParamList, 'Main'>



export const homeTabOpt = {
  tabBarLabel: '',
  tabBarIcon: ({focused, color}:any) => (
    <Icon as={FontAwesome}  name="home"  color={color}/>
  ),
}



export const HomeTab = ({navigation, route} :SubProps) => {
  
  return(
    <View style={style.container}>
      <Button title={"to main screen"} onPress={()=>navigation.push("Main")}/>
    </View> 
  )

}