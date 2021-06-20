import React from 'react';
import {View, FlatList} from 'react-native';
import Post from '../../components/posts/index';
import feed from '../../../assets/feed';

const SearchResults = () => {
  return (
    <View>
      <FlatList data={feed} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default SearchResults;
