import React from 'react';
import {View, TextInput, Button} from 'react-native';

const SearchBox = ({placeholder, handleText, title, handleSearch}) => {
  console.log('rendering SearchBox');
  return (
    <View
      style={{
        backgroundColor: '#ccc0ee',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderRadius: 10,
      }}>
      <TextInput
        style={{margin: 10, padding: 10}}
        placeholder={placeholder}
        onChangeText={handleText}
      />
      <Button title={title} onPress={handleSearch} />
    </View>
  );
};

export default React.memo(SearchBox);
