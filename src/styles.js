import {Dimensions, StyleSheet} from 'react-native';

export const main = StyleSheet.create({
  container: {
    backgroundColor: '#d7ccc8',
  },
});

export const bookCard = StyleSheet.create({
  container: {
      borderWidth: 2,
      borderRadius:10,
    margin: 10,
    flexDirection: 'row',
  },
  textWrapper: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10,
  },
  imgWrapper: {},
  img: {
    resizeMode: 'contain',
    width: Dimensions.get('window').width * 0.35,
    height: Dimensions.get('window').width * 0.55,
  },
});
