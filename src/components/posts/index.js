import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = props => {
  const {post} = props;
  const {id, image, type, title, bed, bedroom, newPrice, totalPrice, oldPrice} =
    post;
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: image,
        }}
      />
      <Text style={styles.bedroom}>
        {bed} Bed {bedroom} bedrooms
      </Text>
      <Text style={styles.description}>
        {type} {title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>{oldPrice}$</Text>
        <Text style={styles.newPrice}> {newPrice}$</Text>
      </Text>
      <Text style={styles.totalPrice}> ${totalPrice} total</Text>
    </View>
  );
};

export default Post;
