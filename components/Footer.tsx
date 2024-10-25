import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


/**
 *Va retourner le composant de navigation
 *
 * @export Footer
 * @return {Footer} 
 */
export default function Footer({nav, current}) {
  const navig = (page) => {
    nav.navigate(page)
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <FontAwesome name="home" size={28} color={current==='home'?"green":'gray'}  onPress={()=>navig('Acceuil')}/>
      </TouchableOpacity> 
      <TouchableOpacity>
        <FontAwesome name="tags" size={28} color={current==='sell'?"green":'gray'} onPress={()=>navig('Vendre')}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name="question" size={28} color={current==='question'?"green":'gray'}  />
      </TouchableOpacity>
      <TouchableOpacity style={styles.ShoppingCart}>
        <FontAwesome name="shopping-cart" size={20} color={current==='shop'?"green":'gray'} onPress={()=>navig('Panier')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name="bell" size={25} color={current==='notif'?"green":'gray'} />
      </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  //style pour container
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

  //style pour les composants du panier
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
