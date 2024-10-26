import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

/**
 *Va retourner le composant de la page d'inscription
 *
 * @export Sign
 * @return {Sign}
 */
export default function Sign({ navigation }) {
  const redirect = (page: string): any => {
    navigation.navigate(page);
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/mgstore.png")}
      />
      <View style={styles.formContainer}>
        <Text style={styles.title}>S'inscrire</Text>
        <View style={styles.formGroup}>
          <TextInput
            style={styles.input}
            placeholderTextColor={"black"}
            editable
            placeholder="Nom"

            // onChangeText={text => onChangeText(text)}
            // value={value}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={"black"}
            editable
            placeholder="Prenom"

            // onChangeText={text => onChangeText(text)}
            // value={value}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={"black"}
            editable
            placeholder="Age"
            keyboardType="numeric"

            // onChangeText={text => onChangeText(text)}
            // value={value}
          />

          <TextInput
            style={styles.input}
            placeholderTextColor={"black"}
            editable
            placeholder="Mot de passe"
            keyboardType="visible-password"
            // onChangeText={text => onChangeText(text)}
            // value={value}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={"black"}
            editable
            placeholder="Confirmer le mot de passe"
            keyboardType="visible-password"
            // onChangeText={text => onChangeText(text)}
            // value={value}
          />
          <TouchableOpacity style={styles.logBtn}>
            <Text style={styles.btnTitle}>Inscription</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sign}>
          <Button
            title="Deja un compte? se connecter"
            onPress={() => redirect("Login")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //style du container
  container: {
    padding: 20,
    height: 900,
    backgroundColor: "whitesmoke",
  },

  //style du logo de l'application
  image: {
    width: 250,
    height: 250,
    margin: "auto",
    position: "relative",
    top: -250,
  },

  //style du container de la formulaire
  formContainer: {
    position: "relative",
    top: -560,
    // backgroundColor:'blue',
    padding: 10,
  },

  //style du title
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    position: "relative",
    top: 30,
  },

  //style du container de l'input
  formGroup: {
    padding: 10,
    flex: 1,
    height: 500,
    // backgroundColor:'red',
    flexDirection: "column",
    position: "relative",
    top: 30,
  },

  //style des inputs
  input: {
    width: 330,
    height: 50,
    padding: 10,
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },

  //style du boutonde connexion
  logBtn: {
    backgroundColor: "green",
    width: 330,
    height: 50,
    borderRadius: 10,
  },

  //style du texte de connexion
  btnTitle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    lineHeight: 43,
  },

  sign: {
    position: "relative",
    top: 400,
  },
});
