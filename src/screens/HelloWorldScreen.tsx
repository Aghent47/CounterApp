import React from 'react';
import { View, Text } from 'react-native';

export const HelloWorldScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{
        fontSize: 45,
        fontWeight: 'bold',
        color: 'white',

      }} >Hello World</Text>
    </View>
  );
};
