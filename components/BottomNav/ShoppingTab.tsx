import { FontAwesome } from "@expo/vector-icons";
import { Icon } from "native-base";
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { IconTab } from "../../types";


const style = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  }
});


export const shoppingTabOpt = {
  tabBarLabel: '',
  tabBarIcon: ({focused, color}: IconTab) => (
    <Icon as={FontAwesome}  name="shopping-bag" color={color}/>
  ),
}



export const ShoppingTab = () => {
  return(
    <View style={style.container}>
      <Text>ShoppingTab</Text>
    </View>
  )

}