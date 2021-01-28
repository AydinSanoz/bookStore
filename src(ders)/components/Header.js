import React from 'react';
import {View, Image} from 'react-native';

const Header = (props) => {
  return (
    <View style={{background: '#040404'}}>
      <Image
        source={props.imgPath}
        alt="hey logo"
        style={{width: '100%', height: 200}}
      />
    </View>
  );
};

export default Header;
