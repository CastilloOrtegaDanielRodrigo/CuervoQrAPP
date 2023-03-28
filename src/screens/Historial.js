import React from "react";
import { View, Text,  } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const Historial = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Hola, este es mi texto en React Native o</Text>
    </View>
    );
}
export default Historial;