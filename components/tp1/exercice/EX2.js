import React from 'react';
import { View, StyleSheet } from 'react-native';
import MyButton from './Button';

const EX2 = () => {
  const handlePress1 = () => {
    alert('ceci est le debut du test 2 ');
  };

  const handlePress2 = () => {
    alert('ceci est la fin du test 2 ');
  };

  return (
    <View style={styles.container}>
      <MyButton title="Debut du Test 2" onPress={handlePress1} color="blue" />
      <MyButton title="Fin du Test 2" onPress={handlePress2} color="green" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default EX2;