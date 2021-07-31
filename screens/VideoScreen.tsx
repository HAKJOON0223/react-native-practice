import React from "react"
import { StackScreenProps } from "@react-navigation/stack";
import { ParamList } from "../types";
import { BottomNavBase } from "../components/BottomNav/BottomNavBase";
import { Text } from "react-native";


type VideosProps = StackScreenProps<ParamList, 'Videos'>


export const VideoScreen = ({navigation, route} : VideosProps) => {
  return (
    <>
      <Text>비디오 페이지</Text>
    </>
  )
}