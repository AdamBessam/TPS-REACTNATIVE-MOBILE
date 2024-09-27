import React, { useState } from "react";
import { StyleSheet, TextInput,Text, View, TouchableOpacity, Alert } from "react-native";

export default function Ex2tp4() {
  const [nom,setNom]=useState('');
  const [prenom,setPrenom]=useState('');
  const [CIN,setCIN]=useState('');
  const [adre,setadre]=useState('');
  const [afficher,setafficher]=useState(false);

  function handleClick() {
    if(nom.length !== 0 && prenom.length !== 0)
      setafficher(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nom :</Text>
      <TextInput
        style={styles.input}
        placeholder="Taper Votre nom"
        onChangeText={text => {
          setNom(text);
          setafficher(false);
        }}
      />

      <Text style={styles.label}>Prenom :</Text>
      <TextInput
        style={styles.input}
        placeholder="Taper Votre nom"
        onChangeText={text => {
          setPrenom(text);
          setafficher(false);
        }}
      />

      <Text style={styles.label}>CIN :</Text>
      <TextInput
        style={styles.input}
        placeholder="Taper Votre CIN"
        onChangeText={text => {
          setCIN(text);
          setafficher(false);
        }}
      />

      <Text style={styles.label}>Adresse :</Text>
      <TextInput
        style={styles.input}
        placeholder="Taper Votre adresse"
        onChangeText={text => {
          setadre(text);
          setafficher(false);
        }}
      />

      <TouchableOpacity style={styles.button} onPress={handleClick}>
        <Text style={styles.text}>Confirmer</Text>
      </TouchableOpacity>

      {afficher && (
        <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Informations :</Text>
          <Text style={styles.infoText}>Nom : {nom}</Text>
          <Text style={styles.infoText}>Prenom : {prenom}</Text>
          <Text style={styles.infoText}>CIN : {CIN}</Text>
          <Text style={styles.infoText}>Adresse: {adre}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  label: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  text:{
    fontSize:20,
    color:'white',  
  },
  input: {
    height: 40,
    marginVertical: 8, 
    marginHorizontal: 12, 
    width: 300,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green', 
  },
  infoContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  infoText: {
    fontSize: 16,
    marginTop: 6,
  },
});
