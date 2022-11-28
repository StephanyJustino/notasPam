
import React from 'react'
import {View,Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import {useRoute} from "@react-navigation/native";

export default function Detalhes(){
const routes = useRoute();
return(
 
    <View>
    <Image source={{uri: routes.params?.data.Imagem}} style={styles.imagem}></Image>
    <Text>{routes.params?.dados.nome}</Text>
    <Text>{routes.params?.dados.Nota01}</Text>
    <Text>{routes.params?.dados.Nota02}</Text>
    <Text>{routes.params?.dados.Nota03}</Text>

    <TouchableOpacity style={styles.btnAtualizar}> Atualizar  </TouchableOpacity>
    <TouchableOpacity style={styles.btnDeletar}> Deletar </TouchableOpacity>
    </View>

);
}
