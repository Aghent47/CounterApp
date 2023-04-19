import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
export const Counter = () => {

    const [contador, setContador] = useState(0);

    const handlePressAdd = () => {
        setContador(contador + 1);
    };
    const handlePressRest = () => {
        setContador(contador - 1);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title} >
                Counter: {contador} </Text>

            <TouchableOpacity onPress={handlePressAdd} style={styles.buttonLocationBR} >
                <View style={[styles.buttom]}  >
                    <Text style={styles.contentButtom} >+1</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePressRest} style={styles.buttonLocationBL} >
                <View style={[styles.buttom]}  >
                    <Text style={styles.contentButtom} >-1</Text>
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
    buttonLocationBR: {
        position: 'absolute',
        bottom: 25,
        right: 25,
    },
    buttonLocationBL: {
        position: 'absolute',
        bottom: 25,
        left: 25,
    },

    buttom: {
        backgroundColor: '#5856D6',
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentButtom: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
});
