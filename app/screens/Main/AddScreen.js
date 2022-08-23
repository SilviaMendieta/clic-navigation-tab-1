import {View, Text,TextInput,Pressable,StyleSheet,Image} from 'react-native'
import React, { useState } from 'react'
import { idGenerator } from '../../../utils/IdGenerator';

export default function AddScreen(){
    const[productName,setProductName]=useState('');
    const[description,setDescription]=useState('');
    const[price,setPrice]=useState(null);

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Crear Producto</Text>
          <TextInput
          style={StyleSheet.input}
          onChangeText={(value)=>setProductName(value)}
          value={productName}
          placeholder="Nombre del producto"
          />
          <TextInput
          style={StyleSheet.textArea}
          onChangeText={(value)=>setDescription(value)}
          value={description}
          placeholder="Descripción"
          multiline
          numberOflines={3}
          />
          <TextInput
          style={StyleSheet.input}
          onChangeText={(value)=>setPrice(value)}
          value={price}
          placeholder="$ Precio"
          />
          <Image
          style={styles.image}
          source={require('../../../assets/product.png')}
           />
           <Pressable style={styles.button}>
            <Text style={styles.label}>Crear Producto</Text>
           </Pressable>
        </View>
      );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  input:{
    marginTop: 10,
    borderWidth: 2,
    width: 340,
    height: 50,
    borderRadius: 5,
    borderColor:'#02CCFF',
    padding: 10,
  },
  textArea:{
    marginTop: 10,
    borderWidth: 2,
    width: 340,
    height: 100,
    borderRadius: 5,
    borderColor:'#02CCFF',
    padding: 10,
  },
  image:{
    width: 180,
    height: 180,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#02CCFF',
    borderRadius: 5,
    width: 340,
    height: 50,
    alignItems:'center',
    justifyContent:'center',
  },
  laber: {
    color:'#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  }
})