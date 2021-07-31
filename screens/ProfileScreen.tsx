import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Text } from "react-native";
import { BottomNavBase } from "../components/BottomNav/BottomNavBase";
import { ProfileNav } from "../components/TopNav/ProfileNav";
import { ParamList } from "../types";


type ProfileScreen = StackScreenProps<ParamList, "Profile">


export const ProfileScreen = ({navigation, route} : ProfileScreen) => {
  return(
    <>
      <ProfileNav/>
      <Text>Text</Text>
    </>
  )
}