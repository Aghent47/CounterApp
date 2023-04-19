import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
export const Counter = () => {

    const [contador, setContador] = useState(0);

    const handlePress = () => {
        setContador(contador + 1);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title} >
                Counter: {contador} </Text>
            <TouchableOpacity onPress={handlePress}>
                <View style={styles.buttom}  >
                    <Text style={styles.contentButtom} >+1</Text>
                </View>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 45,
        fontWeight: 'bold',
        color: 'white',
        top: -30,
    },
    buttom: {
        backgroundColor: '#5856D6',
        width: 100,
        height: 50,
        fontWeight: 'bold',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        top: 30,
    },
    contentButtom: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
},

);
