import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import themeColors from '../../theme/themeColors';
import {Add} from 'iconsax-react-nativejs';

const FloatActionButton = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Add size={40} color={themeColors.WHİTE} />
    </TouchableOpacity>
  );
};

export default FloatActionButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeColors.GREEN,
    width: 80,
    height: 80,
    borderRadius: 100,
    position: 'absolute',
    bottom: 50,
    right: 20,
  },
});
