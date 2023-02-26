import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MainLayOut = ( { children } ) => {
  return (
    <View style={{flex:1}}>
      <Text>MainLayOut</Text>
      {children}
    </View>
  )
}

export default MainLayOut

const styles = StyleSheet.create({})