import React from "react"
import { StackScreenProps } from "@react-navigation/stack";
import { ParamList } from "../types";
import { BottomNavBase } from "../components/BottomNav/BottomNavBase";
import { Dimensions, Text } from "react-native";
import { MainNav } from "../components/TopNav/MainNav";
import Carousel from "../components/Carousel";


type MainProps = StackScreenProps<ParamList, 'Main'>

const screenWidth = Math.round(Dimensions.get('window').width);
const PAGES = [
  {
    num: 1,
    color: '#86E3CE',
  },
  {
    num: 2,
    color: '#D0E6A5',
  },
  {
    num: 3,
    color: '#FFDD94',
  },
  {
    num: 4,
    color: '#FA897B',
  },
  {
    num: 5,
    color: '#CCABD8',
  },
];


export const MainScreen = ({navigation, route} : MainProps) => {
  return (
    <>
    <MainNav/>
    <Carousel
          gap={16}
          offset={36}
          pages={PAGES}
          pageWidth={screenWidth - (16 + 36) * 2}
        />
      <Text>메인페이지</Text>
    </>
  )
}