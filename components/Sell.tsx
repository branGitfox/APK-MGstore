import { View ,StyleSheet, Text , TextInput} from "react-native"
import Header from "./Header"
import Footer from "./Footer"

/**
 *Composant de la vente
 *
 * @export sell
 * @return {Sell} 
 */
export default function Sell({navigation}) {
  return (
    <View style={styles.container}>
        <Header/>
        <View style={styles.formContainer}>
            <Text style={styles.title}>Vendre</Text>
            <View style={styles.formGroup}>

                <TextInput style={styles.input}
                placeholderTextColor={'black'}  
                editable
                placeholder="Rechercher..."
                // onChangeText={text => onChangeText(text)}
                // value={value}
                />
                 <TextInput style={styles.input}
                placeholderTextColor={'black'}  
                editable
                placeholder="Rechercher..."
                // onChangeText={text => onChangeText(text)}
                // value={value}
                />
                 <TextInput style={styles.input}
                placeholderTextColor={'black'}  
                editable
                placeholder="Rechercher..."
                // onChangeText={text => onChangeText(text)}
                // value={value}
                />
                 <TextInput style={styles.input}
                placeholderTextColor={'black'}  
                editable
                placeholder="Rechercher..."
                // onChangeText={text => onChangeText(text)}
                // value={value}
                />
            </View>
        </View>
        <Footer nav={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'whitesmoke',
      position:'relative',
    },

    formContainer:{
        width:400,
        height:660,
        padding:10,
        // backgroundColor:'red',
        margin:'auto'
    },

    title:{
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    },

    formGroup:{
        flex:1,
        // backgroundColor:'green',
        padding:10
    },

    input:{
        padding:20,
        // flex:1,
        height: 40,
        borderWidth: 1,  
        borderRadius:30,
        borderColor:'green',
        color:'black',
        shadowColor:'black',
        shadowOpacity:0.2,
        marginBottom:30
        // textAlign:'center'
    },
  })
