import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { homeTabOpt } from "../components/BottomNav/HomeTab"
import { profileTabOpt } from "../components/BottomNav/ProfileTab"
import { searchTabOpt } from "../components/BottomNav/SearchTab"
import { shoppingTabOpt } from "../components/BottomNav/ShoppingTab"
import { videosTabOpt } from "../components/BottomNav/VideosTab"
import { MainScreen } from "./MainScreen"
import { ProfileScreen } from "./ProfileScreen"
import { SearchScreen } from "./SearchScreen"
import { ShoppingScreen } from "./ShoppingScreen"
import { VideoScreen } from "./VideoScreen"
import { Icon } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { ParamList } from "../types";
import { Text, View } from "react-native";



const BottomTab = createMaterialTopTabNavigator()


const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export type RootParams = StackScreenProps<ParamList, "Main">

export const RootScreen = ({navigation, route}:RootParams) => {

  return(

    <>
      <BottomTab.Navigator tabBarPosition="bottom" tabBarOptions={{showIcon: true}} swipeEnabled={false}  >
        <BottomTab.Screen name="HomeTab" component={MainScreen}  options={homeTabOpt} listeners={{
          tabPress: e => {
            // Prevent default action
            navigation.push("Test")
            e.preventDefault();
          },
        }}/>
        <BottomTab.Screen name="SearchTab" component={SearchScreen} options={searchTabOpt}/>
        <BottomTab.Screen name="VideosTab" component={VideoScreen} options={videosTabOpt}/>
        <BottomTab.Screen name="ShoppingTab" component={ShoppingScreen} options={shoppingTabOpt}/>
        <BottomTab.Screen name="ProfileTab" component={ProfileScreen} options={profileTabOpt}/>
      </BottomTab.Navigator>
    </>
  )
}