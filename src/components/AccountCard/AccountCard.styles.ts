import {StyleSheet} from 'react-native';
import {theme} from '../../utils';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  container: {
    width: theme.scaleWidth(151),
    height: theme.scaleHeight(151),
    borderRadius: theme.scaleWidth(24),
    backgroundColor: COLORS.DARK_SECONDARY,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.scaleWidth(16),
    marginBottom: theme.scaleHeight(24),
  },
  containerOdd: {
    marginRight: theme.scaleWidth(24),
  },
});
