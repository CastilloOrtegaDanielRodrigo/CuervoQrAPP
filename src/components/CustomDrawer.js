import React from "react";
import { View, Text, ImageBackground, Image, Touchable } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Avatar } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";


const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}
                contentContainerStyle={{ backgroundColor: '#4953E0' }}>

                <ImageBackground source={require('../assets/images/hacker.png')}
                    style={{ padding: 30 }}>
                    <Avatar source={{
                        uri: "https://i.pinimg.com/originals/66/9c/68/669c68af00d49891e2f3c78c539862da.png"
                    }}
                        style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }} />

                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='person-outline' size={16} color='#fff' />
                        <Text style={{ color: '#fff', fontFamily: 'Roboto-Medium', marginRight: 5 }} >  Usuario</Text>
                    </View>
                        <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Roboto-Medium' }} >Castillo Ortega Daniel Rodrigo</Text>
                    
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='school-outline' size={16} color='#fff' />
                        <Text style={{ color: '#fff', fontFamily: 'Roboto-Medium', marginRight: 5 }} > Carrera</Text>
                    </View>
                        <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Roboto-Medium' }} >T.S.U. en Tecnologías de la Infomación, Área Desarrollo de Software Multiplataforma</Text>
               
                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>

            </DrawerContentScrollView>

        </View >

    );

}
export default CustomDrawer;