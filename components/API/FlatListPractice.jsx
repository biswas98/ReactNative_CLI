import {View, Text, FlatList, StyleSheet} from 'react-native';
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

  return (
    <View>
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
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    // borderWidth: 1,
  },
});
