import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@/components/Home";
import Shop from "@/components/ShoppingCart";
import Sell from "@/components/Sell";
import Loader from "@/components/Loader";

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
      <Stack.Screen
          name="Loader"
          component={Loader}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Acceuil"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Panier" component={Shop} />
        <Stack.Screen
          name="Vendre"
          component={Sell}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
