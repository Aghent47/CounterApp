import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
export const Counter = () => {

    const [contador, setContador] = useState(0);

    const handlePress = () => {
        setContador(contador + 1);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{
                fontSize: 45,
                fontWeight: 'bold',
                color: 'white',
                top: -30,
            }} >Counter: {contador} </Text>
            <TouchableOpacity onPress={handlePress}>
                <View style={{
                    backgroundColor: '#5856D6',
                    width: 100,
                    height: 50,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: 30,
                }} >
                    <Text>+1</Text>
                </View>

            </TouchableOpacity>
        </View>

    );
};
