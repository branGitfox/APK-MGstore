import { View, TextInput, TouchableOpacity, StyleSheet,Text } from 'react-native';

/**
 *Va returner le composant de connexion
 *
 * @export Login
 * @return {Login} 
 */
export default function Login() {
  return (
    <View style={styles.container}>
        <Text>welcome to login page...</Text>
    </View>
  )
}

const styles  = StyleSheet.create({
    //style container
    container:{
        flex:1,
        backgroundColor:'whitesmoke',
        padding:10
    }
})
