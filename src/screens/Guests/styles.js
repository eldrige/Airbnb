import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 2,
    alignItems: 'stretch',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    color: '#aaa',
    fontSize: 15,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  plus: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  searchBtn: {
    backgroundColor: '#f15454',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    height: 50,
    marginBottom: 20,
    borderRadius: 10,
  },
  searchBtnText: {
    color: 'white',
    fontSize: 20,
  },
});

export default styles;
