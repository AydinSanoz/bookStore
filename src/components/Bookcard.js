import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {bookCard} from '../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const BookCard = ({item}) => {
  return (
    <View style={bookCard.container}>
      <View style={bookCard.imgWrapper}>
        <Image
          style={bookCard.img}
          source={{uri: item?.imageLinks?.smallThumbnail}}
        />
      </View>
      <View style={bookCard.textWrapper}>
        <Text style={bookCard.text}>{item.title}</Text>
        <Text style={bookCard.text}>Author:{item.authors || 'Not Defined'}</Text>
        <View style={bookCard.addToFavWrapper}>
          <TouchableOpacity style={bookCard.likeButton}>
            <Icon name="favorite-border" size={30} color="#300" />
          </TouchableOpacity>
          <TouchableOpacity style={bookCard.addToFavButton}>
            <Text>Add To Favorites</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

/*
volumeInfo:
allowAnonLogging: true
authors: Array(1)
0: "Murat Yıldırımoğlu"
length: 1
__proto__: Array(0)
canonicalVolumeLink: "https://play.google.com/store/books/details?id=dt8zDQAAQBAJ"
categories: ["Biography & Autobiography"]
contentVersion: "preview-1.0.0"
description: "Bilgisayar dünyası çok sayıda ilginç öykü bulunur: Başarılı insanların, başarısız insanların, suçluların ve yasa adamlarının öyküleri. Bu kitapta bu türden birkaç kişinin öyküsü bulunuyor. Öyküleri okurken bilgisayara ve yaşama ilişkin dersler de alacağınızdan eminim."
imageLinks: {smallThumbnail: "http://books.google.com/books/content?id=dt8zDQAAQ…=frontcover&img=1&zoom=5&edge=curl&source=gbs_api", thumbnail: "http://books.google.com/books/content?id=dt8zDQAAQ…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"}
industryIdentifiers: (2) [{…}, {…}]
infoLink: "https://play.google.com/store/books/details?id=dt8zDQAAQBAJ&source=gbs_api"
language: "tr"
maturityRating: "NOT_MATURE"
panelizationSummary: {containsEpubBubbles: false, containsImageBubbles: false}
previewLink: "http://books.google.com.tr/books?id=dt8zDQAAQBAJ&pg=PT36&dq=Bilgisayar/Bilgisayar+Bilimleri&hl=&cd=2&source=gbs_api"
printType: "BOOK"
publisher: "Yıldırımoğlu Yayıncılık"
readingModes: {text: false, image: true}
subtitle: "Bilgisayar dünyasından öyküler, portreler. Kevin Mitnick, Robert Noyce, Robert Tappan Morris, Phlippe Kahn, Stephen Wolfram"
title: "Bilgisayar Dünyasından Portreler"
*/
