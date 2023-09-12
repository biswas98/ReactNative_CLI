import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

export default function Test() {
  const [state, setState] = useState(true);
  const [emailState, setEmailState] = useState(false);

  const onChange = () => {
    state ? setState(false) : setState(true);
  };

  const emailValidation = emailState => {
    let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    console.log(regex.test(emailState));
  };
  return (
    <View style={{margin: 20}}>
      <Text>Enter your Email</Text>
      <TextInput
        style={{borderWidth: 1, marginBottom: 20}}
        placeholder="Email..."
        placeholderTextColor={'grey'}
        onChange={text => {
          setEmailState(text);
          emailValidation(emailState);
        }}
      />
      {/* {emailState ? <Text>True</Text> : <Text>false</Text>} */}
      <Text>Enter your Password</Text>
      <TextInput
        //need to implement validation
        style={{borderWidth: 1, marginBottom: 20}}
        placeholder="Password..."
        placeholderTextColor={'grey'}
        secureTextEntry={state}
      />
      <Button title="click" onPress={onChange} />
    </View>
  );
}
