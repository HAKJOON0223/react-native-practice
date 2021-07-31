import React, { useState } from "react"
import { StackScreenProps } from "@react-navigation/stack";
import { Button, StyleSheet, Text, View, Modal, Alert, Pressable } from "react-native";
import { ParamList } from "../types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { style } from "styled-system";
import { BottomNavBase } from "../components/BottomNav/BottomNavBase";



type SearchProps = StackScreenProps<ParamList, 'Main'>

export const SearchScreen = ({navigation, route}: SearchProps) => {
  //navigation.navigate("Test")
  return (
    <Button title="to Test" onPress={()=>{navigation.push("Test")}}/>
  )
}