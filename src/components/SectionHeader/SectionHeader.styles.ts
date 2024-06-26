import {StyleSheet} from 'react-native';
import {theme} from '../../utils';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  container: {
    height: theme.scaleHeight(36),
    backgroundColor: COLORS.PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.scaleHeight(16),
  },
  arrow: {
    transform: [{rotate: '270deg'}],
    paddingRight: theme.scaleWidth(8),
  },
  arrowDefault: {
    transform: [{rotate: '90deg'}],
    paddingRight: theme.scaleWidth(8),
  },
});
