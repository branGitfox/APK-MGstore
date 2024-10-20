import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '@/components/Header'
import Search from '@/components/Search'
import Filter from '@/components/Filter'

export default function index() {
  return (
    <View style={style.container}>
        <Header/>
        <Search/>
    </View>
  )
}


const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  }
})
