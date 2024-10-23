import { View, Text, Image, StyleSheet, TextInput } from "react-native";



/**
 *
 * header de l'application qui va contenir le logo et le nom de l'application
 * @export Header
 * @return {Header}
 */

export default function Header() {
  return (
    <View>
      <View style={style.container}>
        <View style={style.left}>
          <Image
            style={style.logo}
            source={require("../assets/images/mgstore.png")}
          />
          <Text style={style.title}>MG-Store</Text>
        </View>
        <View style={style.shop}>
          <Image style={style.userProfil} width={40} height={40} source={require('../assets/images/img1.avif')}/>
        </View>
      </View>
      <View>
   
        <TextInput/>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  //logo de l'application
  logo: {
    width: 90,
    height: 90,
  },

  //style du container parent
  container: {
    flexDirection: "row",
    height: 90,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },

  //style du nom de l'application
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  //style container parent gauche
  left: {
    flex: 3/ 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  //style de l'icon shop
  shop: {
    paddingRight: 10,
  },

  //style de la barre de recherche
  search:{
    textAlign:'center'
  },

  userProfil:{
    borderRadius:50
  }
});
