import React, { Component } from 'react'
import { View, StyleSheet, Image} from 'react-native'

export default function Loader({navigation}){
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/images/mgstore.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:1000,
        backgroundColor:'green', 
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        width:300,
        height:300
    }
})