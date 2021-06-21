import React, {useState} from 'react';
import styles from './styles';
import {View, Text, Pressable} from 'react-native';

const GuestScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
    <View>
      <View style={styles.item}>
        <View>
          <Text style={styles.title}>Adults</Text>
          <Text style={styles.description}>Aged 18 or above</Text>
        </View>
        <View style={styles.action}>
          <Pressable
            style={styles.circle}
            onPress={() => setAdults(prev => prev - 1)}>
            <Text style={styles.plus}> - </Text>
          </Pressable>
          <Text> {adults}</Text>
          <Pressable
            style={styles.circle}
            onPress={() => setAdults(prev => prev + 1)}>
            <Text style={styles.plus}> + </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.item}>
        <View>
          <Text style={styles.title}>Children</Text>
          <Text style={styles.description}>Aged 2 -12</Text>
        </View>
        <View style={styles.action}>
          <Pressable
            style={styles.circle}
            onPress={() => setChildren(prev => prev - 1)}>
            <Text style={styles.plus}> - </Text>
          </Pressable>
          <Text> {children}</Text>
          <Pressable
            style={styles.circle}
            onPress={() => setChildren(prev => prev + 1)}>
            <Text style={styles.plus}> + </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.item}>
        <View>
          <Text style={styles.title}>Infants</Text>
          <Text style={styles.description}>Under 2</Text>
        </View>
        <View style={styles.action}>
          <Pressable
            style={styles.circle}
            onPress={() => setInfants(prev => prev - 1)}>
            <Text style={styles.plus}> - </Text>
          </Pressable>
          <Text> {infants}</Text>
          <Pressable
            style={styles.circle}
            onPress={() => setInfants(prev => prev + 1)}>
            <Text style={styles.plus}> + </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default GuestScreen;
