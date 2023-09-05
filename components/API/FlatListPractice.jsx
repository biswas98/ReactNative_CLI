import {View, Text, FlatList, StyleSheet, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function FlatListPractice() {
  const [response, setResponse] = useState();

  const apiResponse = async () => {
    const URL = 'https://jsonplaceholder.typicode.com/posts';
    let response = await fetch(URL);
    response = await response.json();
    setResponse(response);
  };

  useEffect(() => {
    apiResponse();
  }, []);

  const onchange = text => {};

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Search...."
          onChange={onchange}
        />
      </View>
      <FlatList
        keyExtractor={data => data.id}
        data={response}
        renderItem={({item}) => (
          <View style={styles.dataContainer}>
            <View style={styles.textContainer}>
              <Text>{item.title}</Text>
            </View>
            <View>
              <Text>😄</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  dataContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  textContainer: {
    // borderWidth: 1,
  },
  textInputStyle: {
    borderWidth: 1,
    // margin: 5,
  },
});
