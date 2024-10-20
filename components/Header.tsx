import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Search from "./Search";

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
          <FontAwesome name="shopping-cart" size={28} color="white" />
        </View>
      </View>
      <View>
   
        <TextInput/>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  logo: {
    width: 90,
    height: 90,
  },

  container: {
    flexDirection: "row",
    height: 90,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },

  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  left: {
    flex: 2 / 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  shop: {
    paddingRight: 10,
  },

  search:{
    textAlign:'center'
  }
});
