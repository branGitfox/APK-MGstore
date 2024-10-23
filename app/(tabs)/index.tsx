import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@/components/Home';
import Shop from '@/components/ShoppingCart';

const Stack = createNativeStackNavigator();

export default function  MyStack(){
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Acceuil"
          component={Home}
          options={{headerShown:false}}
        />
        <Stack.Screen name="Panier" component={Shop} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};