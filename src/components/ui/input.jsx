import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useRef} from 'react';

import themeColors from '../../theme/themeColors';

const Input = props => {
  const {title, eror} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput {...props} style={styles.input} />
      {eror && (
        <Text style={{marginTop: 5, color: themeColors.RED}}>{eror}</Text>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 18,

    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  input: {
    padding: 10,
    backgroundColor: themeColors.INPUT,
    fontSize: 16,
    borderRadius: 5,
    paddingVertical: 15,
  },
});
