import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
export default function Exercice3() {
  const [count,Setcount]=useState(0);
  const handleClick=()=>{
    Setcount(count+1);
  }
  return (
    <View>
     <Text style={styles2.texto}>You clicked me  {count}</Text>
      <TouchableOpacity
        onPress={handleClick}
        style={[styles2.button, { backgroundColor: "green" }]}
      >
        <Text style={styles2.text}>{ count==0 ? "PRESS ME" : "PRESSED "+ count+" TIMES"}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles2 = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  texto:{
     fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    textAlign:'center',
  }
});

