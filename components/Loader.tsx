import React, { Component, useEffect, useState } from 'react'
import { View, StyleSheet, Image, ActivityIndicator} from 'react-native'

export default function Loader({navigation}){
    useEffect(()=>{
        setTimeout(() =>{
            navigation.navigate('Login')
        }, 2000)
    })
  return (
    <View style={styles.container}>
        <Image style={styles.image2} source={require('../assets/screenShoot/ispm.jpeg')}/>
        <Image style={styles.image} source={require('../assets/images/mgstore.png')}/>
        <ActivityIndicator color={'white'}/>
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
    },

    image2:{
        width:200,
        height:200
    }
})