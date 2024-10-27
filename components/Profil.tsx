import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

/**
 *Va retoutner le composant du profil de l'utilisateur
 *
 * @export profil
 * @return {Profil} 
 */
export default function Profil() {
  return (
    <View style={styles.container}>
        <Image style={styles.image} width={200}  height={200} source={require('../assets/images/img1.avif')}/>
        <FontAwesome style={styles.camera} size={20} name='camera'/>
        <Text style={styles.name}>Brandon Fidelin <FontAwesome size={20} color={'green'} name='pencil'/></Text>
     </View>
  )
}


const styles = StyleSheet.create({
    //style pour le container 
    container:{
        flex:1,
        height:900,
        backgroundColor:'whitesmoke',
        // justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',
        padding:20,
        
    },

    //style du profil de l'utilisateur
    image: {
        borderRadius:200
    },

    //style du nom de l'utilisateur
    name:{
        fontWeight:'600',
        fontSize:25,
        marginTop:20
    },

    //style de l'icon camera
    camera:{
        position:'absolute',
        left:250,
        top:197
    }
})