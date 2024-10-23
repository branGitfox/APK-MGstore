import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


/**
 *Va retourner le composant de navigation
 *
 * @export Footer
 * @return {Footer} 
 */
export default function Footer({nav}) {
  const navig = (page) => {
    nav.navigate(page)
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <FontAwesome name="home" size={28} color={"green"} />
      </TouchableOpacity> 
      <TouchableOpacity>
        <FontAwesome name="tags" size={28} color={"gray"} onPress={()=>navig('Vendre')}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name="question" size={28} color={"gray"}  />
      </TouchableOpacity>
      <TouchableOpacity style={styles.ShoppingCart}>
        <FontAwesome name="shopping-cart" size={20} color={"gray"} onPress={()=>navig('Panier')} />
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
    flex: 1,
    height: 10,
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
    // position:'absolute',
    // bottom:10,
    // left:0,
    // right:0
    
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
