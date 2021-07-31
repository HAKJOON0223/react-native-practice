import { FontAwesome } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { Icon } from "native-base";
import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { IconTab, ParamList } from "../../types";


const style = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  }
});

export const searchTabOpt = {
  tabBarLabel: '',
  tabBarVisible : false,
  tabBarIcon: ({focused, color}: IconTab) => (
    <Icon as={FontAwesome} name="search" color={color}/>
  ),
}
export const SearchTab = ({navigation, route}: any) => {
  return(
    <View style={style.container}>
      <Text>SearchTab</Text>
    </View>
  )

}