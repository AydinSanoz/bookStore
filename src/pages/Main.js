import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {BookCard, SearchBox} from '../components';
import axios from 'axios';
import {main} from '../styles';
import {firebase} from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Main = (props) => {
  const [bookList, setBookList] = useState([]);
  const [text, setText] = useState('');

  const ref = firebase.firestore().collection('BookList');

  async function addDbBook(bookItem) {
    await ref.add({
      isLiked: false,
      title: bookItem?.title,
      authors: bookItem?.authors,
      imgUri: bookItem?.imgUri,
    });
  }
  const fetchData = async (searchText) => {
    console.log('Fetch starts');
    const {data} = await axios.get(
      'https://www.googleapis.com/books/v1/volumes?',
      {
        params: {
          q: searchText || 'Bilgisayar',
        },
      },
    );
    setBookList(data.items);
    console.log('fetch ends');
    data.items.forEach((val) => {
      const bookItem = {
        authors: val?.volumeInfo?.authors,
        title: val?.volumeInfo?.title,
        imgUri: val?.volumeInfo?.imageLinks?.smallThumbnail,
      };
      addDbBook(bookItem);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    return ref.onSnapshot((querySnapshot) => {
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
      setBookList(list);
    });
  }, []);
  const renderData = ({item}) => {
    return <BookCard {...item} />;
  };

  const onSearchPress = () => {
    fetchData(text);
  };

  return (
    <SafeAreaView style={main.container}>
      <View>
        <Text>Welcome Book</Text>
        <SearchBox
          placeholder="Enter a text to search"
          title="search"
          onChangeText={(val) => setText(val)}
          onPress={onSearchPress}
        />
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={bookList}
          renderItem={renderData}
        />
      </View>
    </SafeAreaView>
  );
};
