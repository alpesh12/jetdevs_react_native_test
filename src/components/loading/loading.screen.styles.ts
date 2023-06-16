import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.white,
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 99,
  },
  indicator: { transform: [{ scale: 2 }] },
});
