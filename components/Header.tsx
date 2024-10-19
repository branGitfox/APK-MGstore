import { View, Text, Image, StyleSheet } from "react-native";
import {FontAwesome} from '@expo/vector-icons'

/**
 *
 *header de l'application qui va contenir le logo et le nom de l'application
 * @export Header
 * @return {Header}
 */

export default function Header() {
  return (
    <View style={style.container}>
      <View>
        <Image
          style={style.logo}
          source={require("../assets/images/mgstore.png")}
        />
        <Text style={style.title}></Text>
      </View>
      <View>
      <FontAwesome name='shopping-cart' size={28} color='white'/>
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
    alignItems:'center'
  },

  title: {
    color: "white",
    fontSize: 20,
  },
});
