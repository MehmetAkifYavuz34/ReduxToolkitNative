import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import themeColors from '../../theme/themeColors';

const Button = props => {
  const {title, status} = props;
  const setColor = () => {
    switch (status) {
      case 'success':
        return themeColors.GREEN;
      case 'warning':
        return themeColors.YELLOW;
      case 'info':
        return themeColors.PURPLE;

      default:
        return themeColors.BLUE;
    }
  };
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, {backgroundColor: setColor()}]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 15,
    borderRadius: 10,
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: themeColors.WHİTE,
  },
});
