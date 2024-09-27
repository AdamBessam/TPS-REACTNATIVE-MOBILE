import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Alert } from "react-native";

export default function Ex1tp4() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [CIN, setCIN] = useState('');
  const [adre, setAdre] = useState('');

  function handleClick() {
    if (nom.length !== 0 && prenom.length !== 0) {
      Alert.alert(
        "Informations",
        `Nom: ${nom}\nPrenom: ${prenom}\nCIN: ${CIN}\nAdresse: ${adre}`,
        [{ text: "OK" }]
      );
    } else {
      Alert.alert("Erreur", "Veuillez remplir tous les champs.");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nom :</Text>
      <TextInput
        style={styles.input}
        placeholder="Taper Votre nom"
        onChangeText={text => setNom(text)}
      />

      <Text style={styles.label}>Prenom :</Text>
      <TextInput
        style={styles.input}
        placeholder="Taper Votre prénom"
        onChangeText={text => setPrenom(text)}
      />

      <Text style={styles.label}>CIN :</Text>
      <TextInput
        style={styles.input}
        placeholder="Taper Votre CIN"
        onChangeText={text => setCIN(text)}
      />

      <Text style={styles.label}>Adresse :</Text>
      <TextInput
        style={styles.input}
        placeholder="Taper Votre adresse"
        onChangeText={text => setAdre(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleClick}>
        <Text style={styles.text}>Confirmer</Text>
      </TouchableOpacity>
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
  text: {
    fontSize: 20,
    color: 'white',
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
});
