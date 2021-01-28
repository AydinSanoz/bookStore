import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import Header from './components/Header';
import hey from './assets/planet.jpg';

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((count) => count + 1);
  };

  return (
    <View>
      <Header imgPath={hey} />
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: 20,
        }}>
        <Button title = 'Click me to increase the subcribers!' onPress={increase}></Button>
        <Text>Subscribed Person count: {count}</Text>
      </View>
    </View>
  );
}

export default App;
