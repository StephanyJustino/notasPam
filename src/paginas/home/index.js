import React, { useEffect, useState } from 'react';
import firebase from '../../firebaseConnection';
import CardAluno from '../../componentes/cardAluno';
import { StyleSheet, Text, View, TouchableOpacity,Button, FlatList} from 'react-native';

export default function Home(){
const [aluno, setAlunos] = useState([]);

useEffect(() =>{

    async function buscarAluno(){
        await firebase.database().ref('Alunos').on('value',(snapshot)=> {
            
            setAlunos([]);
            snapshot.forEach ((childItem) => {

                var data = {
                    key : childItem.key,
                    nome : childItem.val().Nome,
                    Nota01 : childItem.val().Nota01,
                    Nota02 : childItem.val().Nota02,
                    Nota03 : childItem.val().Nota03,
                    Imagem : childItem.val().Imagem,
                };

                setAlunos(Alunos => [...Alunos,data]);
            })
            })
    }
    buscarAluno();
},[])

return(

    <View style = {{alignItems:'center'}}>

<FlatList
        data = {aluno}
        numColumns= {2}
        keyExtractor= { (item)=>item.key}
        renderItem ={ ({item}) => <CardAluno data = {item}></CardAluno>}
        />    
    </View>


);


}

const styles = StyleSheet.create({

    botao:{
        backgroundColor:'green',
        width:'80%',
        alignItems:"center",
        marginTop:10
    }

}
)