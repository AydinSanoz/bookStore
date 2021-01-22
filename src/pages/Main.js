import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {BookCard, SearchBox} from '../components';
import axios from 'axios';
import {main} from '../styles';
import {firebase} from '@react-native-firebase/firestore';

export const Main = (props) => {
  const [bookList, setBookList] = useState([]);
  const [books, setBooks] = useState([]);
  const [text, setText] = useState('');
  const ref = firebase.firestore().collection('BookList');

  async function addBook(items) {
    await ref.add({
      isLiked: false,
      title: items.title,
      authors: items.authors,
      imgUri: items?.imageLinks?.smallThumbnail,
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
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    return ref.onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        console.log(
          '🚀 ~ file: Main.js ~ line 43 ~ querySnapshot.forEach ~ doc',
          doc,
        );
        const {authors, imgUri, isLiked, title} = doc.data();
        list.push({
          id: doc.id,
          authors,
          imgUri,
          isLiked,
          title,
        });
      });

      console.log("🚀 ~ file: Main.js ~ line 43 ~ returnref.onSnapshot ~ list", list)
      setBooks(list);

      // if (loading) {
      //   setLoading(false);
      // }
    });
  }, []);

  const renderData = ({item}) => {
    addBook(item.volumeInfo);
    return <BookCard item={item.volumeInfo} />;
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
