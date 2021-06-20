import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  img: {
    width: '100%',
    // height: 100,
    // backgroundColor: 'green',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bedRooms: {
    marginVertical: 10,
    color: 'grey',
  },
  description: {
    fontSize: 16,
    lineHeight: 26,
  },
  prices: {
    fontSize: 15,
  },
  oldPrice: {
    color: 'grey',
    textDecorationLine: 'line-through',
  },
  newPrice: {},
  totalPrice: {
    textDecorationLine: 'underline',
  },
});

export default styles;
