import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet} from 'react-native';
import axios from 'axios';
import List from './components/List';
import SearchInput from './components/SearchInput';

let originalList = [];
const App = () => {
  console.log(' Redering App');
  const [counter, setCounter] = useState(0);
  const [userList, setUserList] = useState([]);
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(({data}) => {
      originalList = data;
      setUserList(data);
    });
  }, []);
  function increase() {
    setCounter(counter + 1);
  }
  const handleText = useCallback((val) => {
    setText(val);
  }, []);

  const handleSearch = () => {
    setSearch(text);
  };

  const filteredList = useMemo(
    () =>
      userList.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search, userList],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.counterContainer}>
          <Text>App Counter</Text>
          <Text style={styles.counterText}>{counter}</Text>
          <Button title="Increase Counter" onPress={increase} />
        </View>
        <SearchInput
          title="Search"
          handleText={handleText}
          placeholder="Enter a Text..."
        />
        <Button title="Search" onPress={handleSearch} />
        <List userList={filteredList} />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
  counterContainer: {backgroundColor: '#00000020', alignItems: 'center'},
  counterText: {fontSize: 40},
});
