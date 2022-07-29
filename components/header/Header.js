import {Text, View} from 'react-native';
import React from 'react';
import styles from './Header.style';

const HeaderSide = ({counter}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Yapılacaklar</Text>
      <Text style={styles.headerText2}>{counter}</Text>
    </View>
  );
};

export default HeaderSide;
