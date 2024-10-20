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

        <Button
          title="Press me"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
        <Button
          title="Press me"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
      {/* <View style={style.line}></View> */}
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
  },

  filtreBtns: {
    padding: 5,
    backgroundColor: "green",
    borderRadius: 5,
    height: 50,
  },
});
