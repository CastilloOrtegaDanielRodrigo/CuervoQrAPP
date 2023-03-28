
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PantallaInicio from "../screens/PantallaInicio";
import LoginScreen from "../screens/LoginScreen";
import Register from "../screens/Register";
import { MenuDrawer } from "./MenuDrawer";
import EditPerfil from "../screens/EditPerfil";


const Stack = createNativeStackNavigator();

const AuthStack = ({ navigation }) => {
  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={PantallaInicio} name='PantallaInicio' />
      <Stack.Screen component={MenuDrawer} name='Drawer' />
      <Stack.Screen component={LoginScreen} name='Login' />
      <Stack.Screen component={Register} name='Register' />
      <Stack.Screen component={EditPerfil} name='EditarPerfil'/>

    </Stack.Navigator>

  )
}
export default AuthStack;