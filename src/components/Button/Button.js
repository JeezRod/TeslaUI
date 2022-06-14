import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './Button.styled';

const Button = props => {
  const {type, text, onPress} = props;
  const backgroundColor = type === 'primary' ? '#303237' : '#DEDEDE';
  const textColor = type === 'primary' ? '#FEFEFF' : '#434449';

  return (
    <View style={styles.btnContainer}>
      <Pressable
        style={[styles.btn, {backgroundColor: backgroundColor}]}
        onPress={() => {
          onPress();
        }}>
        <Text style={[styles.btnText, {color: textColor}]}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
