import React from 'react';
import { TouchableNativeFeedback, View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';

interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}

export const Fab = ({ title, onPress, position = 'br' }: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
            onPress={onPress}
            activeOpacity={ 0.75 }
            style={[styles.buttonLocation, (position === 'bl' ? styles.left : styles.right)]}>
                <View style={[styles.buttom]}  >
                    <Text style={styles.contentButtom} > {title} </Text>
                </View>
            </TouchableOpacity>
        );
    };

    const android = () => {
        return (
            <View style={[styles.buttonLocation, (position === 'bl' ? styles.left : styles.right)]}>
                <TouchableNativeFeedback onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('#28425B', false, 25)}>
                    <View style={[styles.buttom]}  >
                        <Text style={styles.contentButtom} > {title} </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    };


    return (
        Platform.OS === 'ios' ? ios() : android()
    );
};

const styles = StyleSheet.create({
    buttonLocation: {
        position: 'absolute',
        bottom: 25,
    },
    right: {
        right: 25,
    },
    left: {
        left: 25,
    },

    buttom: {
        backgroundColor: '#5856D6',
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 8,
    },
    contentButtom: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
});
