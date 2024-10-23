import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


/**
 *Va retourner le composant de navigation
 *
 * @export Footer
 * @return {Footer} 
 */
export default function Footer({nav}) {
  const navig = () => {
    nav.navigate('Panier')
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <FontAwesome name="home" size={28} color={"green"} />
      </TouchableOpacity> 
      <TouchableOpacity>
        <FontAwesome name="tags" size={28} color={"gray"} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name="question" size={28} color={"gray"}  />
      </TouchableOpacity>
      <TouchableOpacity style={styles.ShoppingCart}>
        <FontAwesome name="shopping-cart" size={20} color={"gray"} onPress={navig} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name="bell" size={25} color={"gray"} />
      </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    // height: 70,
    flex: 1,
    alignContent: "center",
    width: 350,
    margin: "auto",
    padding: 10,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.5,
    justifyContent: "space-evenly",
    alignItems: "center",
    // alignItems:
    flexDirection: "row",
    
  },

  ShoppingCart:{
    position:'absolute',
    top:-300,
    left:-25,
    borderColor:'green',
    borderWidth:2,
    padding:7,
    borderRadius:50,
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    
  }

});
