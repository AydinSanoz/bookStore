import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {SearchBox} from '../components';
import Bookcard from '../components/Bookcard';
import axios from 'axios';
import {main} from '../styles';
import firestore from '@react-native-firebase/firestore';

export const Main = (props) => {
  const [bookList, setBookList] = useState([]);
  const [text, setText] = useState('');

  const ref = firestore().collection('BookList');

  async function addDbBook(bookItem) {
    await ref.doc(bookItem.id).set({
      ...bookItem,
    });
  }
  const fetchData = async (searchText) => {
    console.log('Fetch starts');
    try {
      const {data} = await axios.get(
        'https://www.googleapis.com/books/v1/volumes?',
        {
          params: {
            kind: searchText,
          },
        },
      );
      console.log('fetchedData', data.items);
      data.items.forEach((val) => {
        const bookItem = {
          id: val?.id,
          isLiked: false,
          savedDate: firestore.Timestamp.now(),
          authors: val?.volumeInfo?.authors,
          title: val?.volumeInfo?.title,
          imgUri: val?.volumeInfo?.imageLinks?.smallThumbnail,
        };
        addDbBook(bookItem);
      });
    } catch (error) {
      console.log('error occurred', error);
    }
    console.log('fetch ends');
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    return ref
      .orderBy('savedDate', 'desc')
      .limit(10)
      .onSnapshot((querySnapshot) => {
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
          setBookList(list);
        });
      });
  }, []);

  const renderData = ({item}) => {
    return <Bookcard {...item} />;
  };

  const onSearchPress = () => {
    fetchData(text);
  };

  return (
    <SafeAreaView style={main.container}>
      <View style={main.container}>
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
