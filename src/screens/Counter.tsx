import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

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

                <Fab
                    title="+1"
                    onPress={handlePressAdd}
                />
                <Fab
                    title="-1"
                    position='bl'
                    onPress={handlePressRest}
                />
            {/* <TouchableOpacity onPress={handlePressRest} style={styles.buttonLocationBL} >
                <View style={[styles.buttom]}  >
                    <Text style={styles.contentButtom} >-1</Text>
                </View>
            </TouchableOpacity> */}
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

});
