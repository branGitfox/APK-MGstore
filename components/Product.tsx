import { View, Text, StyleSheet } from 'react-native';

/**
 *Va retourner le composant de produit
 *
 * @export Product
 * @return {Product} 
 */
export default function Product() {
  return (
    <View style={styles.container}>
        <Text>Hello world</Text>
        
    </View>
  )
}


const styles = StyleSheet.create({
    //style du container
    container:{
        backgroundColor:'red',
       flex:1,
       flexDirection:'column',
       position:'relative',
       top:-220,
       padding:10,
    }
})