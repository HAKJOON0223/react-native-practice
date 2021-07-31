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

export const videosTabOpt = {
  tabBarLabel: '',
  tabBarIcon: ({focused, color}: IconTab) => (
    <Icon as={FontAwesome}  name="film" color={color}/>
  ),
}

export const VideosTab = () => {
  return(
    <View style={style.container}>
      <Text>VideosTab</Text>
    </View>
  )

}