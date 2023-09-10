import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

export default function Test() {
  const [state, setState] = useState(true);

  const onChange = () => {
    state ? setState(false) : setState(true);
  };
  return (
    <View style={{margin: 20}}>
      <Text>Enter your Email</Text>
      <TextInput
        style={{borderWidth: 1, marginBottom: 20}}
        placeholder="Emails..."
        placeholderTextColor={'grey'}
        secureTextEntry={state}
      />
      <Text>Enter your Password</Text>
      <TextInput
        style={{borderWidth: 1, marginBottom: 20}}
        placeholder="Password..."
        placeholderTextColor={'grey'}
        secureTextEntry={state}
      />
      <Button title="click" onPress={onChange} />
    </View>
  );
}
