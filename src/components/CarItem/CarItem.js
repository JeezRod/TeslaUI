import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './CarItem.styled';
import Button from '../Button/Button';

const CarItem = () => {
  return (
    <>
      <ImageBackground
        source={require('../../../assets/images/Model3.jpeg')}
        style={styles.bckImg}
      />
      <View style={styles.carCard}>
        <View style={styles.cardHeader}>
          <Text style={styles.carModel}>Model 3</Text>
          <Text style={styles.tagLine}>
            Order Online for Touchless Delivery
          </Text>
        </View>
        <Button
          text={'Custom Order'}
          type={'primary'}
          onPress={() => {
            console.warn('Custom order');
          }}
        />
        <Button
          text={'Existing Inventory'}
          type={'secundary'}
          onPress={() => {
            console.warn('Existing Inventory');
          }}
        />
      </View>
    </>
  );
};

export default CarItem;
