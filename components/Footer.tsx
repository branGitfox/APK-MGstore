import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
f
/**
 *Va retourner le composant de navigation
 *
 * @export Footer
 * @return {Footer} 
 */
export default function Footer({nav}) {
  const navig = () => {
    nav.navigate('Test')
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <FontAwesome name="home" size={28} color={"green"} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name="shopping-cart" size={28} color={"gray"} onPress={navig} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name="bell" size={25} color={"gray"} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name="cog" size={28} color={"gray"} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 70,
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
});
