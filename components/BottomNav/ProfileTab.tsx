import { FontAwesome } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { Icon } from "native-base";
import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { IconTab } from "../../types"


const style = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  }
});

export const profileTabOpt = {
  tabBarLabel: '',
  tabBarIcon: ({focused, color}: IconTab) => (
    <Icon as={FontAwesome}  name="user-circle" color={color}/>)
}
