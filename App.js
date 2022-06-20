/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CarItem from './src/components/CarItem/CarItem';

const App = () => {
  return (
    <View style={styles.container}>
      <CarItem
        name={'Model 3'}
        tagLine={'Order Online for'}
        tagLineDO={'Touchless Delivery'}
        DOURL={'https://www.tesla.com/en_CA/support/taking-delivery'}
        image={require('./assets/images/Model3.jpeg')}
        button={[
          {
            text: 'Custom Order',
            url: 'https://www.tesla.com/en_ca/model3/design',
          },
          {
            text: 'Existing Inventory',
            url: 'https://www.tesla.com/en_ca/inventory/new/m3',
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
