import { View ,StyleSheet, Text } from "react-native"
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
        backgroundColor:'red',
        margin:'auto'
    },

    title:{
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    }
  })
