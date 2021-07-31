import React, { ReactChild, ReactChildren, ReactElement } from "react"
import { StyleSheet, View } from "react-native"



const styles = StyleSheet.create({
  container :{
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row', // row
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10
  },
})




export const HeaderWrapper = ({children}: any) => {
  return(
    <View style={styles.container}>
      {children}
    </View>
  )
}