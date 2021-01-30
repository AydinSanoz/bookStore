import React from 'react';
import {View, TextInput, Button} from 'react-native';
import {searchBox} from '../styles';

export const SearchBox = (props) => {
  console.log('SearchBox rendered');

  return (
    <View style={searchBox.container}>
      <TextInput
        style={searchBox.text}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
      />
      <Button title={props.title} onPress={props.onPress} />
    </View>
  );
};
