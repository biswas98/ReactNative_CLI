import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';

export default function FlatListPractice() {
  return (
    <View>
      <FlatList
        keyExtractor={data => data.key}
        data={response}
        renderItem={({item}) => (
          <View style={styles.dataContainer}>
            <View style={styles.textContainer}>
              <Text>{item.head}</Text>
              {item.events.map(item => {
                return <Text>{item?.type}</Text>;
              })}
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
