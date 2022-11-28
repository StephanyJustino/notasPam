import firebase from '../../firebaseConnection';
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";
import React, {useState} from "react";

export default function Cadastrar(){

  const [textNome, setNome] = useState('');
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');
  const [textLink, setText2] = useState('');

  async function cadastrar(){

    const alunos = await firebase.database().ref('Alunos')
    const chave = alunos.push().key;

    alunos.child(chave).set ({

      Nome: textNome,
      Nota01: number1,
      Nota02: number2,
      Nota03: number3,
      Imagem: textLink

    })

  }

  return (
    <SafeAreaView>
        <Text style={styles.titulo}>Cadastro de Alunos</Text>
        <Text style={styles.text}>Nome do aluno</Text>
      <TextInput
        style={styles.input}
        onChangeText={(textNome) => setNome(textNome) }
        value={textNome}
        placeholder="Insira o nome do aluno"
      />
      <Text style={styles.text}>Nota 01</Text>
      <TextInput
        style={styles.input}
        onChangeText={(number1) => setNumber1(number1) }
        value={number1}
        placeholder="Insira a nota 01"
      />
      <Text style={styles.text}>Nota 02</Text>
      <TextInput
        style={styles.input}
        onChangeText={(number2) => setNumber2(number2) }
        value={number2}
        placeholder="Insira a nota 02"
      />
      <Text style={styles.text}>Nota 03</Text>
      <TextInput
        style={styles.input}
        onChangeText={(number3) => setNumber3(number3) }
        value={number3}
        placeholder="Insira a nota 03"
      />
      <Text style={styles.text}>Foto do aluno</Text>
      <TextInput
        style={styles.input}
        onChangeText={(textLink) => setText2(textLink) }
        value={textLink}
        placeholder="Link da foto do aluno"
      />
       <TouchableOpacity style={[styles.botoes ,{backgroundColor:'blue'}]} onPress={cadastrar}>
                    <Text> Cadastrar Aluno </Text>

            </TouchableOpacity>

      <Text>{textNome}</Text>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 390,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  text: {
    color: 'black',
    fontSize: '15px',
    textAlign: 'left',
    marginLeft: '18px',
    marginTop: '10px',
    fontFamily: 'sans-serif',
  },

  botoes:{
    width:'390px',
    alignItems:'center',
    height: 40,
    borderRadius: 5,
    marginBottom: 10,
    fontSize:10,
    color: "white",
    justifyContent: 'space-around',
    marginLeft: '11px',
  },

  titulo: {
    color: 'black',
    fontSize: '25px',
    textAlign: 'center',
    marginTop: '20px',
    marginBottom: '20px'
  },
}); 
