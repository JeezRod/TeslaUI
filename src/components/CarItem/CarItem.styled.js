import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  carCard: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardHeader: {
    marginTop: '25%',
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
  tagLineDO: {
    textDecorationLine: 'underline',
  },
  bckImg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  btnContainer: {
    marginBottom: 50,
  },
});

export default styles;
