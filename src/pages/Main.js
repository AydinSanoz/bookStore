import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {BookCard} from '../components';
import axios from 'axios';
import {main} from '../styles';
import {firebase} from '@react-native-firebase/firestore';

export const Main = (props) => {
  const [bookList, setBookList] = useState([]);
  const ref = firebase.firestore().collection('BookList');
  console.log('🚀 ~ file: Main.js ~ line 11 ~ Main ~ ref', ref);

 

  const fetchData = async () => {
    console.log('Fetch starts');
    const {data} = await axios.get(
      'https://www.googleapis.com/books/v1/volumes?',
      {
        params: {
          q: 'Bilgisayar',
        },
      },
    );
    setBookList(data.items);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   const subscriber = firestore()
  //     .collection('Users')
  //     .onSnapshot((querySnapshot) => {
  //       const users = [];

  //       querySnapshot.forEach((documentSnapshot) => {
  //         users.push({
  //           ...documentSnapshot.data(),
  //           key: documentSnapshot.id,
  //         });
  //       });

  //       setUsers(users);
  //       setLoading(false);
  //     });

  //   // Unsubscribe from events when no longer in use
  //   return () => subscriber();
  // }, []);

  const renderData = ({item}) => {
    return <BookCard item={item.volumeInfo} />;
  };

  return (
    <SafeAreaView style={main.container}>
      <View>
        <Text>Welcome Book</Text>
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={bookList}
          renderItem={renderData}
        />
      </View>
    </SafeAreaView>
  );
};
