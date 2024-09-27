import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

export default function Ex1() {
    const showAlert1 = () => {
        Alert.alert('Test 1', 'Ceci est un test 1');
    };

    const showAlert2 = () => {
        Alert.alert('Test 2', 'Ceci est un test 2');
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button title="Test1" onPress={showAlert1} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Test2" onPress={showAlert2} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    buttonContainer: {
        marginVertical: 10,
        marginTop: 10,
    },
    buttonContainerr: {
        marginVertical: 10,
        marginTop: 200,
    },
});
