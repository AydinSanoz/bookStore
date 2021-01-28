import React from 'react';
import {View, Image} from 'react-native';

const Header = React.memo((props) => {
  console.log("Rendering:Header component");
  return (
    <View style={{background: '#040404'}}>
      <Image
        source={props.imgPath}
        alt="hey logo"
        style={{width: '100%', height: 200}}
      />
    </View>
  );
});

export default Header;
