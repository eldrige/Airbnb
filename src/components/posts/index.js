import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2-amazonaws.com/images/1.jpg',
        }}
      />
      <Text style={styles.bedroom}>1 Bed 1 Bedrooms</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>30$</Text>
        <Text style={styles.newPrice}> 20$</Text>
      </Text>
      <Text style={styles.totalPrice}> $20 total</Text>
    </View>
  );
};

export default Post;
