import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

import Exercice3 from './components/tp2/Exercice.js';
import EX2 from './components/tp1/exercice/EX2.js';
import Squa from './components/tp3/square.js';
import Ex2tp4 from './components/tp4/ex2.js';
import Ex1 from './components/tp1/exercice/EX1.js';
import Ex1tp4 from './components/tp4/ex1.js';


export default function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <View style={styles.container}>
      {/* TP1 */}
       <Ex1/> 

      {/* <EX2/> */}

      {/* TP2 */}
      {/* 
      <Exercice3 count={count} fun={handleClick}/>
      <Exercice3 count={count} fun={handleClick}/> 
      */}

      {/* TP3 */}
      {/*
      <View style={styles.row}>
        <Squa couleur={"yellow"} title={"ADAM"} />
        <View style={styles.space} />
        <Squa couleur={"red"} title={"BESSAM"} />
        <View style={styles.space} />
        <Squa couleur={"yellow"} title={"Bonjour"} />
      </View>
      */}

      {/* TP4 */}
      {/* <Ex1tp4/> */}
      {/* <Ex2tp4/> */}

      {/* TP5 */}
      {/* <Extp5 /> */}
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
  row: {
    flexDirection: "row",
  },
  space: {
    width: 20,
  },
});
