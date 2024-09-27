import { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function Squa(props) {
  return (
    <TouchableOpacity>
      <View style={[styles.squa, { backgroundColor: props.couleur }]}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  squa: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});
