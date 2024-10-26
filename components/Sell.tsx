import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";
import Header from "./Header";
import Footer from "./Footer";
import { FontAwesome } from "@expo/vector-icons";

/**
 *Composant de la vente
 *
 * @export sell
 * @return {Sell}
 */
export default function Sell({ navigation }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState('vestimentaire')

  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert(
        "Désolé, nous avons besoin de permissions pour accéder à votre bibliothèque d'images !"
      );
    }
  };

  const pickImage = async () => {
    await requestPermission();
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setSelectedImage(result.assets[0].uri);
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Vendre</Text>
        <View style={styles.formGroup}>
          <TextInput
            style={styles.input}
            placeholderTextColor={"black"}
            editable
            placeholder="Nom de l'articles"
            // onChangeText={text => onChangeText(text)}
            // value={value}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={"black"}
            editable
            placeholder="Prix"

            // onChangeText={text => onChangeText(text)}
            // value={value}
          />
          <View>
            <Text>Choisissez la categorie de l'article:</Text>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="Vestimentaire" value="vestimentaire" />
              <Picker.Item label="Technologique" value="technologique" />
              <Picker.Item label="Culinaire" value="Culinaire" />
              <Picker.Item label="Autre" value="Autre" />
            </Picker>
          </View>
          <Button title={"Choisir une image"} onPress={pickImage} />
          {selectedImage && (
            <Image
              source={{ uri: selectedImage }}
              style={{ width: 200, height: 170, marginTop: 1, marginLeft: 80 }}
            />
          )}
        </View>
      <Text style={styles.sellBtn}>Vendre <FontAwesome size={15} name="tags"/></Text>
      </View>

      <Footer nav={navigation} current={'sell'}/>
    </View>
  );
}

const styles = StyleSheet.create({
    //style du container
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    position: "relative",
  },

  //style pour le container de la formulaire
  formContainer: {
    width: 400,
    height: 660,
    padding: 10,

    margin: "auto",
  },

  //style pour le titre de l'ecran
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },

  //style pour le container des inputs
  formGroup: {
    flex: 1,
    // backgroundColor:'green',
    padding: 10,
  },

  //style des inputs
  input: {
    padding: 20,
    // flex:1,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "green",
    color: "black",
    shadowColor: "black",
    shadowOpacity: 0.2,
    marginBottom: 20,
    // textAlign:'center'
  },

  //style pour le boutton submit
  sellBtn:{
    textAlign:'center',
    marginBottom:20,
    paddingRight:10,
    paddingLeft:10,
    paddingTop:10,
    paddingBottom:10,
    color:'white',
    backgroundColor:'green',
    borderRadius:21,
    fontWeight:'bold'
  }
});
