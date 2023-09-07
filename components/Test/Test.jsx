import {View, Text, TextInput} from 'react-native';
import React from 'react';

export default function Test() {
  return (
    <View style={{margin: 20}}>
      <Text>Write something...</Text>
      <TextInput
        style={{borderWidth: 1}}
        placeholder="write..."
        placeholderTextColor={'grey'}
        secureTextEntry={true}
      />
    </View>
  );
}
