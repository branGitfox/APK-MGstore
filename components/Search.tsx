import { View , Text, TextInput,StyleSheet} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";


/**
 *Va retourner le composant de la barre de recherche
 *
 * @export
 * @return {Search} 
 */
export default function Search() {
  const [value, onChangeText] = React.useState('')
  return (
    <View style={style.container}>
        <TextInput style={style.input}
        placeholderTextColor={'black'}  
        editable
        placeholder="Rechercher..."
        onChangeText={text => onChangeText(text)}
        value={value}
        />
        <FontAwesome name="search" size={28} color="green"/>
        
    </View>
  )
}

const style= StyleSheet.create({

  //style de la barre de recherche 
    input:{
        padding:20,
        flex:1,
        height: 40,
        borderWidth: 1,  
        borderRadius:30,
        borderColor:'green',
        color:'black',
        shadowColor:'black',
        shadowOpacity:0.2,
        // textAlign:'center'
    },
    
//style du container 
    container :{
        flexDirection:'row',
        gap:10,
        padding:12,
        alignItems:'center'
    }
})