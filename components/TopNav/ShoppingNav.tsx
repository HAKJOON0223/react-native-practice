import { FontAwesome } from "@expo/vector-icons"
import { Icon, Row } from "native-base"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { HeaderWrapper } from "./HeaderWrapper"


const styles = StyleSheet.create({
  
  text :{
    fontSize : 30,
    fontWeight: "bold",
  },
  InnerWrapper : {
    flexDirection : "row"
  },
  Buttons : {
    marginRight : 7
  }
})



export const ShoppingNav = () => {
  return(
    <HeaderWrapper>
      <Text>Shop</Text>
      <View style={styles.InnerWrapper}>
        <Icon as={FontAwesome} name="calendar" style={styles.Buttons}/>
        
        <Icon as={FontAwesome} name="bars"style={styles.Buttons}/> 
      </View>
    </HeaderWrapper>
  )
}