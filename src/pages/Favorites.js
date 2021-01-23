import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {BookCard} from '../components'

export const Favorites = (props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Favorites Page</Text>
        <BookCard />
      </View>
    </SafeAreaView>
  );
};
