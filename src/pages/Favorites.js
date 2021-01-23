import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {FavoriteCard} from '../components';
import {firebase} from '@react-native-firebase/firestore';
import {FlatList} from 'react-native-gesture-handler';

export const Favorites = (props) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('BookList')
      .where('isLiked', '==', true)
      .get()
      .then((querySnapshot) => {
        const list = [];
        querySnapshot.forEach((doc) => {
          const {authors, imgUri, isLiked, title} = doc.data();
          list.push({
            id: doc.id,
            authors,
            imgUri,
            isLiked,
            title,
          });
        });
        setFavorites(list);
      });
  }, []);
  console.log('favorites', favorites);
  const renderData = ({item}) => {
    console.log('🚀 ~ file: Favorites.js ~ line 35 ~ renderData ~ item', item);
    return <FavoriteCard {...item} />;
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Favorites Page</Text>
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={favorites}
          renderItem={renderData}
        />
      </View>
    </SafeAreaView>
  );
};
