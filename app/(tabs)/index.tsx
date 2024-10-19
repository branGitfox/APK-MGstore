import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '@/components/Header'

export default function index() {
  return (
    <View style={style.container}>
        <Header/>
    </View>
  )
}


const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  }
})
