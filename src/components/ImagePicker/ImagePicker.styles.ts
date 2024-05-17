import {StyleSheet} from 'react-native';
import {theme} from '../../utils';

export default StyleSheet.create({
  container: {},
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  containerPicker: {
    position: 'absolute',
    backgroundColor: 'white',
    width: theme.scaleWidth(228),
    borderRadius: theme.scaleWidth(12),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.scaleWidth(16),
    height: theme.scaleHeight(44),
  },
});
