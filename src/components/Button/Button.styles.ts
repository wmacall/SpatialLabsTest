import {StyleSheet} from 'react-native';
import {theme} from '../../utils';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: theme.scaleWidth(8),
    height: theme.scaleHeight(48),
    backgroundColor: COLORS.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerDisabled: {
    backgroundColor: COLORS.BLACK_50,
  },
  secondary: {
    width: theme.scaleWidth(93),
    height: theme.scaleHeight(40),
    borderRadius: theme.scaleWidth(128),
  },
  rounded: {
    borderRadius: theme.scaleWidth(100),
    width: theme.scaleWidth(100),
  },
  rounded_small: {
    width: theme.scaleWidth(27),
    height: theme.scaleHeight(27),
    borderRadius: theme.scaleWidth(13.5),
  },
});
