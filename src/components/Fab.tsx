import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

interface Props {
    title: string;
}

export const Fab = ({title}:Props) => {
    return (
        <>
            <TouchableOpacity onPress={()=>console.log('Click')} style={styles.buttonLocationBR} >
                <View style={[styles.buttom]}  >
                    <Text style={styles.contentButtom} > {title} </Text>
                </View>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
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
