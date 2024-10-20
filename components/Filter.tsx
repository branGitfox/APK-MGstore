import {
  View,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";


export default function Filter() {
  return (
    <View style={style.container}>
      <View style={style.filtreContainer}>
        <TouchableOpacity style={style.filtreBtns}>
          <Button
            color="white"
            title="Press me"
            onPress={() => Alert.alert("Simple Button pressed")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[style.filtreBtns, style.disabledFilter]}>
          <Button
            color="white"
            title="Press me"
            onPress={() => Alert.alert("Simple Button pressed")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[style.filtreBtns, style.disabledFilter]}>
          <Button
            color="white"
            title="Press me"
            onPress={() => Alert.alert("Simple Button pressed")}
          />
        </TouchableOpacity>
        <FontAwesome name="filter" width={30} height={30}/>
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
    width: 100,
    height: 1,
  },

  container: {
    flex: 1,
    // flexDirection:'row',
    padding: 10,
  },

  filtreContainer: {
    flex: 1,
    // padding:10,
    // alignItems:'center',
    flexDirection: "row",
    justifyContent: "center",
    gap:4
  },

  filtreBtns: {
    padding: 5,
    backgroundColor: "green",
    borderRadius: 5,
    height: 50,
  },

  disabledFilter: {
    padding: 5,
    backgroundColor: "gray",
    borderRadius: 5,
    height: 50,
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
