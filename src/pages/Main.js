import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {BookCard} from '../components';
import axios from 'axios';
import {main} from '../styles';

export const Main = (props) => {
  const [bookList, setBookList] = useState([]);

  const fetchData = async (selectedCategory) => {
    console.log('Fetch starts');
    const {data} = await axios.get(
      'https://www.googleapis.com/books/v1/volumes?',
      {
        params: {
          q: 'Cook',
        },
      },
    );
    setBookList(data.items);
    console.log('bookList', data.items);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
