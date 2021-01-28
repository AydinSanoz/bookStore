import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import Header from './components/Header';
import hey from './assets/planet.jpg';
import aa from './assets/unnamed.png';

function App() {
  const [count, setCount] = useState(0);
  const [imgPath, setImgPath] = useState(hey);

  const increase = () => {
    setCount((count) => count + 1);
  };
  const setChangeImage = () => {
    setImgPath(aa);
  };

  return (
    <View>
      <Header imgPath={imgPath} />
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: 20,
        }}>
        <Button
          title="Click me to increase the subcribers!"
          onPress={increase}></Button>
        <Button
          title="Click me to change image"
          onPress={setChangeImage}></Button>
        <Text>Subscribed Person count: {count}</Text>
      </View>
    </View>
  );
}

export default App;
