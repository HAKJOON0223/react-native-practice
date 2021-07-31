import React from "react"
import { Icon } from 'native-base';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { StyleSheet, View } from "react-native";
import { style } from "styled-system";
import { StackScreenProps } from "@react-navigation/stack";
import { ParamList } from "../../types";


const styles = StyleSheet.create({
  container :{
    flexDirection : "row",
  },
  buttons : {
    flex: 1,
    paddingRight: 50
  }
    
})

type MainProps = StackScreenProps<ParamList, 'Main'>

export const MainTopOption = ({navigation, route}: MainProps) =>{
  console.log(navigation, route)
  return {
    title: 'Instagram',
    headerRight: () => (
      <View style={styles.container}>
        <Icon as={FontAwesome} name="plus-square" style={styles.buttons}/> 
        <Icon as={FontAwesome} name="heart" style={styles.buttons}/>
        <Icon as={FontAwesome} name="paper-plane" style={styles.buttons}/>
      </View>
    )
  }
}