import {
  View,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

/**
 *Le composant des filtres
 *
 * @export Filter
 * @return {Filter}
 */
export default function Filter() {
  return (
    <View style={style.container}>
      <View style={style.filtreContainer}>
        <TouchableOpacity style={[style.actionBtn, style.look]}>
          <Text style={style.btntext}>
            Vestimentaire
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[style.actionBtn, style.dis]}>
          <Text style={style.btntext}>
            Technologique 
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[style.actionBtn, style.dis]}>
          <Text style={style.btntext}>
            Culinaire
          </Text>
        </TouchableOpacity>
        <FontAwesome name="filter" width={30} height={30} />

        <View style={style.line} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  //style du separateur
  line: {
    flex: 1,
    borderBottomColor: "black",
    backgroundColor: "gray",
    width: 250,
    height: 0.5,
    position: "absolute",
    top: 80,
  },

  //style du container
  container: {
    flex: 1,
    // flexDirection:'row',
    padding: 10,
  },

  //style du container des filtes
  filtreContainer: {
    flex: 1,
    // padding:10,
    // alignItems:'center',
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
  },

  //style du boutton de filtre active
  filtreBtns: {
    padding: 5,
    backgroundColor: "green",
    borderRadius: 30,
    height: 50,
    shadowColor: "black",
    shadowOpacity: 0.4,
  },

  //style du boutton des filtres non-actives
  disabledFilter: {
    padding: 5,
    backgroundColor: "gray",
    borderRadius: 30,
    height: 50,
  },

  actionBtn: {
    // backgroundColor:'green',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 30,
    shadowColor: "black",
    shadowOpacity: 0.4,
   
  },

  //style du boutton voir
  look: {
    backgroundColor: "green",
  },

  //style du boutton acheter
  dis: {
    backgroundColor: "gray",
  },



  //style de texte des bouttons
  btntext: {
    color: "white",
    position:'relative',
    top:-8,
    zIndex:1,
    height:15
  }
});
