import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

export default function Test() {
  const [state, setState] = useState(true);

  const onChange = () => {
    state ? setState(false) : setState(true);
  };
  return (
    <View style={{margin: 20}}>
      <Text>Write something...</Text>
      <TextInput
        style={{borderWidth: 1, marginBottom: 20}}
        placeholder="write..."
        placeholderTextColor={'red'}
        secureTextEntry={state}
      />
      <Button title="click" onPress={onChange} />
    </View>
  );
}
