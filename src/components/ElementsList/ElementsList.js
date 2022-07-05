import React from 'react';
import CarItem from '../CarItem/CarItem';
import {View, FlatList, Dimensions} from 'react-native';
import styles from './ElementLists.styled';

import TeslaElements from '../../../assets/elements/TeslaElements';

const ElementsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={TeslaElements}
        renderItem={({item}) => <CarItem car={item} />}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ElementsList;
