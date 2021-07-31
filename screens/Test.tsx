import React from "react"
import { Text } from "react-native"
import { BottomNavBase } from "../components/BottomNav/BottomNavBase"
import { StackScreenProps } from "@react-navigation/stack";
import { ParamList } from "../types";
import { ShoppingNav } from "../components/TopNav/ShoppingNav";





type ShoppingProps = StackScreenProps<ParamList, "Test">




export const Test = ({navigation, route}:ShoppingProps) => {
  return(
    <>
      <Text>Test</Text>
    </>
    )

}