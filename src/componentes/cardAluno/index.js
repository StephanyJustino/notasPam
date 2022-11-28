import { View,Text, Image, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

 export default function CardAluno(data) {

    const navigation = useNavigation()

    function irDetalhes(){
        navigation.navigate('Detalhes', {dados:data})
    }

    return (
        <TouchableOpacity style={estilo.container}>
            <Image style = {estilo.imagem}source={{uri: data.imagem}} />
            <Text>{data.nome}</Text>

        </TouchableOpacity>

    );
 }

 const estilo = StyleSheet.create ({

     container: {
         marginHorizontal: 5,
         backgroundColor: '#d89a9e',

     },
     imagem :{
        width:130,
        height:120

     }

 })