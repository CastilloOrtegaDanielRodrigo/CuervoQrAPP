import React from "react";
import { View,
         Text,
         TouchableOpacity,
         ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from 'react-native-safe-area-context';


const PantallaInicio = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
            <View>
                <ImageBackground style={{
                    padding: 130,
                    position: 'absolute',
                    top: -320,
                    left: -122, 
                 }} 
                 source={require('../assets/images/CuervoUTVT.png')}
                 >
                </ImageBackground>
            </View>
            
            <View>
                <Text style={{ 
                    fontFamily: 'Arial Rounded MT',
                    fontSize: 80,
                    fontWeight: 'bold',
                    color: '#000000',
                    
            
            }} >CuervoQr</Text>
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
            >

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{
                        color: '#000000',
                        fontFamily: 'Roboto-Bold',
                        fontWeight: 'bold',
                        marginRight: 0,
                        fontSize: 30
                    }}
                    >
                        Iniciar {' '}</Text>
                    <Icon name='log-in-outline' size={30} color='#349B38' />
                </View>
            </TouchableOpacity>
            <View>
                <ImageBackground style={{
                    padding: 100,
                    position: 'absolute',
                    left: -320,
                    right: 0,
                    width: 570, 
                    height: 400,
                 }} 
                 source={require('../assets/images/ciudad.png')}
                 >
                </ImageBackground>
            </View>

        </SafeAreaView>

    );
}
export default PantallaInicio;