import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 70,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 20,
  },
  btn: {
    backgroundColor: 'white',
    width: 200,
    height: 30,
    marginLeft: 20,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  searchBtn: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
    position: 'absolute',
    zIndex: 100,
    top: 40,
    borderRadius: 20,
    width: width - 40,
    marginHorizontal: 20,
  },
  searchTxt: {},
});

export default styles;
