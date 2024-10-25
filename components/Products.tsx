import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

/**
 *Va retourner le composant des produits
 *
 * @export Product
 * @return {Product}
 */
export default function Product() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nos Produits <FontAwesome name="star" size={20} color={'gold'}/></Text>
      <ScrollView style={{ paddingTop: 2 }}>
        <View style={styles.product}>
          <Image
            style={styles.image}
            width={300}
            height={200}
            source={require("../assets/images/img1.avif")}
          />
          <View style={styles.actions}>
            <View style={styles.profil}>
              <Image
                style={styles.profilImage}
                width={30}
                height={30}
                source={require("../assets/images/img1.avif")}
              />
              <Text>
                Brandon fidelin <FontAwesome name="user" color={"gray"} />
              </Text>
                <Text style={styles.price}>
                  10000AR
              </Text>
            </View>
            <View style={styles.action}>
              <TouchableOpacity style={[styles.actionBtn, styles.look]}>
                <Text style={styles.btntext}>Voir <FontAwesome name="eye"/></Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionBtn, styles.card]}>
                <Text style={styles.btntext}>Panier <FontAwesome name="plus"/></Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionBtn, styles.buy]}>
                <Text style={styles.btntext}>Acheter <FontAwesome name="euro"/></Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.product}>
          <Image
            style={styles.image}
            width={300}
            height={200}
            source={require("../assets/images/img1.avif")}
          />
          <View style={styles.actions}>
            <View style={styles.profil}>
              <Image
                style={styles.profilImage}
                width={30}
                height={30}
                source={require("../assets/images/img1.avif")}
              />
              <Text>
                Nikita vanillie <FontAwesome name="user" color={"gray"} />
              </Text>
              <Text style={styles.price}>
                    10000Ar
               
              </Text>
            </View>
            <View style={styles.action}>
            <TouchableOpacity style={[styles.actionBtn, styles.look]}>
                <Text style={styles.btntext}>Voir <FontAwesome name="eye"/></Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionBtn, styles.card]}>
                <Text style={styles.btntext}>Panier <FontAwesome name="plus"/></Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionBtn, styles.buy]}>
                <Text style={styles.btntext}>Acheter <FontAwesome name="euro"/></Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  //style du container
  container: {
    position: "relative",
    top: 50,
    padding: 20,
    width: 500,
    height: 550,
    justifyContent: "center",
  },

  //style du titre
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    marginBottom: 10,
  },

  //style du produit
  product: {
    width: 300,
    height: 300,
    backgroundColor: "white",
    left: 33,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "black",
    shadowOpacity: 0.4,
    borderColor: "gray",
  },

  //style de l'image
  image: {
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },

  //style des actions
  actions: {
    // backgroundColor:'red',
    flex: 1,
    padding: 5,
    flexDirection: "column",
    // justifyContent:'space-evenly'
  },

  //style du container de l'info du vendeur
  profil: {
    // backgroundColor:'green',
    flex: 1 / 3,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  //style de l'image du vendeur
  profilImage: {
    borderRadius: 50,
  },

  //style du container des bouttons
  action: {
    flex: 1,
    // backgroundColor:'red',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  //style  des bouttons d'actions
  actionBtn: {
    // backgroundColor:'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },

  //style du boutton voir
  look: {
    backgroundColor: "blue",
  },

  //style du boutton acheter
  buy: {
    backgroundColor: "green",
  },

  //style du boutton panier
  card: {
    backgroundColor: "purple",
  },

  //style de texte des bouttons
  btntext: {
    color: "white",
  },

  //style de texte du prix des articles
  price:{
    color:'green',
    fontWeight:'condensed',
    marginLeft:80
  }
});
