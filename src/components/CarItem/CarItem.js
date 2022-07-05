import React from 'react';
import {View, Text, ImageBackground, Linking} from 'react-native';
import styles from './CarItem.styled';
import Button from '../Button/Button';

const CarItem = props => {
  const {name, tagLine, tagLineDO, DOURL, image, button} = props.car;
  // Creating the buttons from the array passed through the props.
  const buttons = button.map((btn, index) => (
    <Button
      text={btn.text}
      key={index + name} //Adding the name to avoid key duplicates with different elements
      type={index === 0 ? 'primary' : 'secondary'}
      onPress={() => Linking.openURL(btn.url)}
    />
  ));
  return (
    <>
      <ImageBackground source={image} style={styles.bckImg} />
      <View style={styles.carCard}>
        <View style={styles.cardHeader}>
          <Text style={styles.carModel}>{name}</Text>
          <Text style={styles.tagLine}>
            {tagLine}&nbsp;{/*Adding empty space*/}
            <Text
              style={styles.tagLineDO}
              onPress={() => Linking.openURL(DOURL)}>
              {tagLineDO}
            </Text>
          </Text>
        </View>
        <View style={styles.btnContainer}>{buttons}</View>
      </View>
    </>
  );
};

export default CarItem;
