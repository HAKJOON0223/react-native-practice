import React from "react"
import { Text } from "react-native"
import { BottomNavBase } from "../components/BottomNav/BottomNavBase"
import { StackScreenProps } from "@react-navigation/stack";
import { ParamList } from "../types";
import { ShoppingNav } from "../components/TopNav/ShoppingNav";





type ShoppingProps = StackScreenProps<ParamList, "Shopping">




export const ShoppingScreen = ({navigation, route}:ShoppingProps) => {
  return(
    <>
    <ShoppingNav />
      <Text>shoppingscreen</Text>
    </>
    )

}