import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import { ParamList } from './types'
import { MainScreen } from './screens/MainScreen'
import { NativeBaseProvider } from 'native-base';
import { enableScreens } from 'react-native-screens';
import { SearchScreen} from './screens/SearchScreen';
import { VideoScreen } from './screens/VideoScreen';
import { ShoppingScreen } from './screens/ShoppingScreen';
import { ProfileScreen } from './screens/ProfileScreen'
import { RootScreen } from './screens/RootScreen';
import { Test } from './screens/Test';


const Main = createStackNavigator<ParamList>()

/*
        
          <Main.Navigator headerMode="none">
            <Main.Screen name="Main" component={MainScreen}/>
            <Main.Screen name="Search" component={SearchScreen}/>
            <Main.Screen name="Videos" component={VideoScreen}/>
            <Main.Screen name="Shopping" component={ShoppingScreen}/>
            <Main.Screen name="Profile" component={ProfileScreen}/>
          </Main.Navigator>
          
          */
export default function App() {  
  console.log('Height on: ', Platform.OS, StatusBar.currentHeight);
  return (
    <SafeAreaView style={styles.safeContainer}>
      <NativeBaseProvider>
        <NavigationContainer>
          <View style={styles.statusBar}></View>
          <Main.Navigator headerMode="none">
            <Main.Screen name="Main"component={RootScreen} />
            <Main.Screen name="Test"component={Test} />
          </Main.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  
  },
  safeContainer : {
    flex: 1
  },
  contents:{
    height: 0
  },
  statusBar :{
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, 
    backgroundColor: "#fff",
  }
});