import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import Product from "./Products";
import { FontAwesome } from "@expo/vector-icons";
import Footer from "./Footer";

/**
 *Le composant du panier
 *
 * @export ShoppingCart
 * @param {*} { navigation }
 * @return {ShoppingCart} 
 */
export default function ShoppingCart({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={{ padding: 2 }}>
        <View style={styles.productContainer}>
          <View style={styles.profilContainer}>
            <Image
              style={styles.image}
              width={30}
              height={30}
              source={require("../assets/images/img1.avif")}
            />
            <Text style={styles.seller}>Brandon Fidelin</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Categorie</Text>:
              Vestimentaires
            </Text>
            <Image
              style={styles.productImage}
              width={70}
              height={70}
              source={require("../assets/images/img1.avif")}
            />
            <View>
              <TouchableOpacity>
                <FontAwesome
                  name="plus"
                  size={15}
                  color={"green"}
                  style={{ marginBottom: 10 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome size={17} name="minus" color={"red"} />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome />
              </TouchableOpacity>
              <Text style={{ fontWeight: "condensedBold" }}>Nbr: 1</Text>
              <Text style={{ fontWeight: "condensedBold" }}>Prix: 20000Ar</Text>
            </View>
          </View>
        </View>

        <View style={styles.productContainer}>
          <View style={styles.profilContainer}>
            <Image
              style={styles.image}
              width={30}
              height={30}
              source={require("../assets/images/img1.avif")}
            />
            <Text style={styles.seller}>Brandon Fidelin</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Categorie</Text>:
              Vestimentaires
            </Text>
            <Image
              style={styles.productImage}
              width={70}
              height={70}
              source={require("../assets/images/img1.avif")}
            />
            <View>
              <TouchableOpacity>
                <FontAwesome
                  name="plus"
                  size={15}
                  color={"green"}
                  style={{ marginBottom: 10 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome size={17} name="minus" color={"red"} />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome />
              </TouchableOpacity>
              <Text style={{ fontWeight: "condensedBold" }}>Nbr: 1</Text>
              <Text style={{ fontWeight: "condensedBold" }}>Prix: 20000Ar</Text>
            </View>
          </View>
        </View>

        <View style={styles.productContainer}>
          <View style={styles.profilContainer}>
            <Image
              style={styles.image}
              width={30}
              height={30}
              source={require("../assets/images/img1.avif")}
            />
            <Text style={styles.seller}>Brandon Fidelin</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Categorie</Text>:
              Vestimentaires
            </Text>
            <Image
              style={styles.productImage}
              width={70}
              height={70}
              source={require("../assets/images/img1.avif")}
            />
            <View>
              <TouchableOpacity>
                <FontAwesome
                  name="plus"
                  size={15}
                  color={"green"}
                  style={{ marginBottom: 10 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome size={17} name="minus" color={"red"} />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome />
              </TouchableOpacity>
              <Text style={{ fontWeight: "condensedBold" }}>Nbr: 1</Text>
              <Text style={{ fontWeight: "condensedBold" }}>Prix: 20000Ar</Text>
            </View>
          </View>
        </View>
        <View style={styles.total}>
          <Text style={{ fontWeight: "bold", color: "white" }}>Total: </Text>
          <Text style={{ fontWeight: "bold", color: "white" }}>
            Acheter <FontAwesome size={15} name="money" />
          </Text>
          <Text style={{ fontWeight: "condensed", color: "white" }}>
            30000Ar
          </Text>
        </View>
      </ScrollView>
      {/* <Footer nav={navigation}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor:'red',
    padding: 10,
  },

  image: {
    borderRadius: 50,
  },
  productImage: {
    borderRadius: 10,
  },

  productContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    shadowColor: "black",
    shadowOpacity: 0.3,
    marginBottom: 10,
  },

  profilContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },

  seller: {
    color: "black",
    fontWeight: 500,
  },

  infoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  total: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "green",
    borderRadius: 5,
    flexDirection: "row",
  },
});
