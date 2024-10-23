import {
  View,
  StyleSheet,
  Button,
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
        <TouchableOpacity style={style.filtreBtns}>
          <Button
            color="white"
            title="Vestimentaires"
            onPress={() => Alert.alert("Simple Button pressed")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[style.filtreBtns, style.disabledFilter]}>
          <Button
            color="white"
            title="Technos"
            onPress={() => Alert.alert("Simple Button pressed")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[style.filtreBtns, style.disabledFilter]}>
          <Button
            color="white"
            title="Autres"
            onPress={() => Alert.alert("Simple Button pressed")}
          />
        </TouchableOpacity>
        <FontAwesome name="filter" width={30} height={30}/>

      <View style={style.line}/>
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
    height: .5,
    position:'absolute',
    top:80,
   
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
    gap:4,
    
    
  },

  //style du boutton de filtre active
  filtreBtns: {
    padding: 5,
    backgroundColor: "green",
    borderRadius: 30,
    height: 50,
    shadowColor:'black',
    shadowOpacity:.4
  },

  //style du boutton des filtres non-actives
  disabledFilter: {
    padding: 5,
    backgroundColor: "gray",
    borderRadius: 30,
    height: 50,
  },
});
