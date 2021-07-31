import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeTab, homeTabOpt } from "./HomeTab"
import { SearchTab, searchTabOpt } from "./SearchTab"
import { ShoppingTab, shoppingTabOpt } from "./ShoppingTab"
import { VideosTab, videosTabOpt } from "./VideosTab"
import { StyleSheet, Text, View } from "react-native"
import { Icon } from "native-base"
import { FontAwesome } from "@expo/vector-icons"
import { ParamList } from "../../types"
import { StackScreenProps } from "@react-navigation/stack"

const BottomTab = createBottomTabNavigator()

/*    <BottomTab.Navigator>
      <BottomTab.Screen name="HomeTab" component={HomeTab} options={homeTabOpt}/>
      <BottomTab.Screen name="SearchTab" component={SearchTab} options={searchTabOpt}/>
      <BottomTab.Screen name="VideosTab" component={VideosTab} options={videosTabOpt}/>
      <BottomTab.Screen name="ShoppingTab" component={ShoppingTab} options={shoppingTabOpt}/>
      <BottomTab.Screen name="ProfileTab" component={ProfileTab} options={profileTabOpt}/>
    </BottomTab.Navigator>
*/

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width:'100%',
    height: 52,
    flexDirection: 'row', // row
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
    borderTopWidth: 1,
    borderColor:'#CCCCCC',
    backgroundColor : 'white',
  }
});

export const BottomNavBase = ({navigation, route}:any) => {
  return (
    <View style={styles.container}>
      <Icon as={FontAwesome}  name="home" onPress={()=>{navigation.push("Main")}}/>
      <Icon as={FontAwesome}  name="search" onPress={()=>{navigation.push("Search")}}/>
      <Icon as={FontAwesome}  name="film" onPress={()=>{navigation.push("Videos")}}/>
      <Icon as={FontAwesome}  name="shopping-bag" onPress={()=>{navigation.push("Shopping")}}/>
      <Icon as={FontAwesome}  name="user-circle" onPress={()=>{navigation.push("Profile")}}/>
    </View>
  )
}