import React from 'react';
import {View, Text, Image} from 'react-native';
import {bookCard} from '../styles';

export const FavoriteCard = ({id, imgUri, authors, title, isLiked}) => {
  return (
    <View style={bookCard.container}>
      <View style={bookCard.imgWrapper}>
        <Image style={bookCard.img} source={{uri: imgUri}} />
      </View>
      <View style={bookCard.textWrapper}>
        <Text style={bookCard.text}>{title}</Text>
        <Text style={bookCard.text}>Author:{authors || 'Not Defined'}</Text>
      </View>
    </View>
  );
};
