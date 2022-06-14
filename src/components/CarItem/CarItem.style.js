import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  carCard: {
    width: '100%',
    height: '100%',
  },
  cardHeader: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
    color: 'red',
  },
  carModel: {
    color: 'black',
    fontSize: 40,
    fontWeight: '500',
  },
  tagLine: {
    fontSize: 16,
    color: '#5c5e62',
  },
  bckImg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default styles;
