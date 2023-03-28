import React from "react";
import { View, Text, ScrollView, SafeAreaView, ImageBackground, Touchable, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

const Register = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff' }}>
            <View>
                <ImageBackground style={{ 
                    padding: 99,
                    top: -90,
                     }} source={require('../assets/images/Registro2.png')}>
                </ImageBackground>
            </View>

            <View style={{ paddingHorizontal: 30 }}>
                <Text style={{
                    top: -40,
                    fontFamily: 'Arial Rounded MT',
                    fontSize: 40,
                    fontWeight: '900',
                    color: '#349B38',
                    marginBottom: 30,
                    textAlign: 'center',
                }}> Registro </Text>

                <View style={{
                    flexDirection: 'row',
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
                    marginBottom: 25
                }}>
                    <Icon style={{ marginRight: 5,  }} name='person-outline' size={22} color='#000000' />
                    <TextInput style={{ flex: 1, paddingVertical: 0,  }} placeholder="Nombre" secureTextEntry={true} />
                </View>

                <View style={{
                    flexDirection: 'row',
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
                    marginBottom: 25
                }}>
                    <Icon style={{ marginRight: 5 }} name='mail-outline' size={22} color='#333' />
                    <TextInput style={{ flex: 1, paddingVertical: 0 }} placeholder="Email" keyboardType="email-addres" />
                </View>

                <View style={{
                    flexDirection: 'row',
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
                    marginBottom: 25
                }}>
                    <Icon style={{ marginRight: 5 }} name='lock-closed-outline' size={22} color='#333' />
                    <TextInput style={{ flex: 1, paddingVertical: 0 }} placeholder="Contraseña" secureTextEntry={true} />
                </View>

                <View style={{
                    flexDirection: 'row',
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
                    marginBottom: 25
                }}>
                    <Icon style={{ marginRight: 5 }} name='lock-closed-outline' size={22} color='#333' />
                    <TextInput style={{ flex: 1, paddingVertical: 0 }} placeholder="Confirmar Contraseña" secureTextEntry={true} />
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Drawer')}
                    style={{
                        backgroundColor: '#349B38',
                        padding: 15,
                        borderRadius: 10,
                        marginBottom: 20
                    }}
                >
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: '900',
                        fontSize: 20,
                        color: '#fff'
                    }}>
                        Crear Cuenta</Text>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: '900',
                        fontSize: 16,
                        color: '#1A64F7'
                    }}>
                        Regresar </Text>

                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );

}
export default Register;