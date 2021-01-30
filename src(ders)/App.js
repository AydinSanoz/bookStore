import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import Header from './components/Header';
import planet from './assets/planet.jpg';
import other from './assets/unnamed.png';
import axios from 'axios';
import List from './components/List';
import SearchBox from './components/SearchBox';

let originalList = [];
const App = () => {
  console.log('Rendering Parent App js');
  const [counter, setCounter] = useState(0);
  const [userList, setUserList] = useState([]);
  const [text, setText] = useState('');
  const [searchText, setSearchtext] = useState('');

  function increase() {
    setCounter(counter + 1);
  }
  const handleText = useCallback((val) => {
    setText(val);
  }, []);

  const handleSearch = useCallback(() => {
    setSearchtext(text);
  }, []);

  useEffect(() => {
    console.log('fetch starts');
    axios.get('https://jsonplaceholder.typicode.com/users').then(({data}) => {
      console.log('data', data);
      setUserList(data);
      originalList = [...data];
    });
    console.log('fetch ends');
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Header />
        <View style={{backgroundColor: '#00000020', alignItems: 'center'}}>
          <Text>App Counter</Text>
          <Text style={{fontSize: 40}}>{counter}</Text>
          <Button title="Increase Counter" onPress={increase} />
        </View>
        <SearchBox
          title="Search"
          handleText={handleText}
          handleSearch={handleSearch}
          placeholder="Enter a Text..."
        />

        <List userList={userList} />
      </View>
    </SafeAreaView>
  );
};

export default App;
