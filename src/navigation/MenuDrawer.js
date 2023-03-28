import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/Ionicons";
import CustomDrawer from "../components/CustomDrawer";

import { Tabs } from "./Tabs";
import UsuarioO from "../screens/UsuarioO";
import Historial from "../screens/Historial";



const Drawer = createDrawerNavigator();

export const MenuDrawer = ({ navigation}) => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: true,  // Oculta la hamburguesa
                drawerLabelStyle: { marginLeft: -25, fontSize: 15, fontFamily: 'Roboto-Medium' }
            }}
        >
            <Drawer.Screen name="Inicio" component={Tabs} options={{
                drawerIcon: ({ color }) => (
                    <Icon name='home-sharp' size={22} color={color} />
                )
            }} />
            <Drawer.Screen name="Usuario" component={UsuarioO} options={{
                drawerIcon: ({ color }) => (
                    <Icon name='person-outline' size={22} color={color} />
                )
            }} />
            <Drawer.Screen name="Historial" component={Historial} options={{
                drawerIcon: ({ color }) => (
                    <Icon name='person-add-outline' size={22} color={color} />
                )
            }} />

            
           
        </Drawer.Navigator>
        
    );
}
//Ionicons
