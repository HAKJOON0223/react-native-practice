import React from "react"
import { Icon } from 'native-base';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { StyleSheet, View,Text } from "react-native";
import { style } from "styled-system";
import { StackScreenProps } from "@react-navigation/stack";
import { ParamList } from "../../types";


const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row', // row
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10
  },
  text :{
    fontSize : 30,
    fontWeight: "bold",
  },
  innerContainer : {
    flexDirection: 'row', // row
  },
  buttons:{
    marginRight: 7
  }

});



export const MainNav = () =>{
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Instagram</Text>
      <View style={styles.innerContainer}>
        <Icon as={FontAwesome} name="plus-square" style={styles.buttons}/> 
        <Icon as={FontAwesome} name="heart" style={styles.buttons}/>
        <Icon as={FontAwesome} name="paper-plane" style={styles.buttons}/>
      </View>
    </View>
  )
}