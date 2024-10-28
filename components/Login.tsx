import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  Button
} from "react-native";


/**
 *Va returner le composant de connexion
 *
 * @export Login
 * @return {Login}
 */
export default function Login({navigation}) {

  const redirect = (page:string):any => {
    navigation.navigate(page)
  }


  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/images/mgstore.png")} />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Se connecter</Text>
        <View style={styles.formGroup}>
        <TextInput
            style={styles.input}
            placeholderTextColor={"black"}
            editable
            placeholder="@adresse email..."

            // onChangeText={text => onChangeText(text)}
            // value={value}
          />
                  <TextInput
            style={styles.input}
            placeholderTextColor={"black"}
            editable
            placeholder="Mot de passe..."

            // onChangeText={text => onChangeText(text)}
            // value={value}
          />
          <TouchableOpacity style={styles.logBtn}>
                <Text onPress={()=> navigation.navigate('Acceuil')} style={styles.btnTitle}>Connexion</Text>
          </TouchableOpacity>
        </View> 
        <View style={styles.sign}>
            <Button title="Pas de compte? s'inscrire" onPress={() => redirect('Sign')}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    //style du container 
    container:{
        padding:20,
        height:900,
        backgroundColor:'whitesmoke'
    },

    //style du logo de l'application
    image:{
        width:250,
        height:250,
        margin:'auto',
        position:'relative',
        top:-250,
        
    },

    //style du container de la formulaire
    formContainer:{
        position:'relative',
        top:-560,
        // backgroundColor:'blue',
        padding:10
    },

    //style du title
    title:{
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
        position:'relative',
        top:30
    },

    //style du container de l'input
    formGroup:{
        padding:10,
        flex:1,
        height:500,
        // backgroundColor:'red',
        flexDirection:'column',
        position:'relative',
        top:30
    },

    //style des inputs
    input:{
        width:330,
        height:50,
        padding:10,
        borderColor:'green',
        borderWidth:1,
        borderRadius:10,
        backgroundColor:'white',
        marginBottom:10
    } ,

    //style du boutonde connexion
    logBtn:{
        backgroundColor:'green',
        width:330,
        height:50,
        borderRadius:10,
    },
    
    //style du texte de connexion
    btnTitle:{
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
        fontSize:20,
        lineHeight:43
    },

    sign:{
        position:'relative',
        top:200
    }
});
