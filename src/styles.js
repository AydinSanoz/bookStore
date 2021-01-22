import {Dimensions, StyleSheet} from 'react-native';

export const main = StyleSheet.create({
  container: {
    backgroundColor: '#d7ccc8',
  },
});

export const bookCard = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row',
  },
  imgWrapper: {},
  img: {
    resizeMode: 'contain',
    width: Dimensions.get('window').width * 0.35,
    height: Dimensions.get('window').width * 0.55,
  },
  textWrapper: {
    flex: 1,
    fontWeight: 'bold',
    flexDirection: 'column',
  },
  text: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10,
  },
  addToFavWrapper: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addToFavButton: {
    padding: 6,
    borderRadius: 8,
    backgroundColor: '#c63f17',
  },
  likeButton: {
    color: 'orange',
  },
});

export const searchBox = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    margin: 15,
    borderRadius: 10,
    backgroundColor: '#00000020',
  },
  text: {
    margin: 10,
  },
});
