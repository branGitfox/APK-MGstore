import { View , Text, TextInput,StyleSheet} from "react-native";
import { FontAwesome } from "@expo/vector-icons";



export default function Search() {
  return (
    <View style={style.container}>
        <TextInput style={style.input}
        placeholder="brandon"
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
        borderColor:'green'
    },
    
//style du container 
    container :{
        flexDirection:'row',
        gap:10,
        padding:12,
        alignItems:'center'
    }
})