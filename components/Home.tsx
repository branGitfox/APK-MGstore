import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '@/components/Header'
import Search from '@/components/Search'
import Filter from '@/components/Filter'
import Product from '@/components/Products'
import Footer from '@/components/Footer'

/**
 *Le composant de la page d'acceuil
 *
 * @export Home
 * @param {*} {navigation}
 * @return {Home} 
 */
export default function Home({navigation}) {
  return (
    <View style={style.container}>
        <Header/>
        <Search/>
        <Filter/>
        <Product/>
        <Footer nav={navigation}/>
    </View>
  )
}


const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'whitesmoke',
    position:'relative',
  }
})