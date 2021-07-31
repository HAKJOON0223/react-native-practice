import React from "react"
import { Icon } from 'native-base';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View } from "react-native";
import { style } from "styled-system";
import { StackScreenProps } from "@react-navigation/stack";
import { ParamList } from "../../types";
import { HeaderWrapper } from "./HeaderWrapper";


const styles = StyleSheet.create({
  container :{
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
    alignItems : 'center'
  },
  buttons : {
    marginRight: 7
  },
  bracket : {
    transform: [{ rotate: "90deg" }]
  }
})


export const ProfileNav = () =>{
  return (
    <HeaderWrapper>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>MyAccount</Text>
        <Icon as={FontAwesome} name="chevron-right" style={styles.bracket} />
      </View>
      <View style={styles.innerContainer}>
        <Icon as={FontAwesome} name="plus-square" style={styles.buttons}/>
        <Icon as={FontAwesome} name="bars" style={styles.buttons}/> 
      </View>
    </HeaderWrapper>
  )
}