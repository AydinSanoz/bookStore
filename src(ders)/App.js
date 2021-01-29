import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, Button, Dimensions} from 'react-native';
import Header from './components/Header';
import planet from './assets/planet.jpg';
import other from './assets/unnamed.png';
import axios from 'axios';
import List from './components/List';

const App = () => {
  console.log('Rendering Parent App js');
  const [counter, setCounter] = useState(0);
  const [userList, setUserList] = useState([]);

  function increase() {
    setCounter(counter + 1);
  }
  useEffect(() => {
    console.log('fetch starts');
    axios.get('https://jsonplaceholder.typicode.com/users').then(({data}) => {
      console.log('data', data);
      setUserList(data);
    });
    console.log('fetch ends');
  }, []);

  return (
    <SafeAreaView>
      <View>
        <View style={{backgroundColor: '#00000020', alignItems: 'center'}}>
          <Text>App Counter</Text>
          <Text style={{fontSize: 40}}>{counter}</Text>
          <Button title="Increase Counter" onPress={increase} />
        </View>
        <List userList={userList} />
      </View>
    </SafeAreaView>
  );
};

export default App;
