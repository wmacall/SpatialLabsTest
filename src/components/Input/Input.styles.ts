import {StyleSheet} from 'react-native';
import {theme} from '../../utils';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  container: {
    height: theme.scaleHeight(48),
    width: '100%',
    backgroundColor: COLORS.DARK_SECONDARY,
    paddingLeft: theme.scaleWidth(16),
    color: COLORS.BLACK,
    borderRadius: theme.scaleWidth(8),
    fontFamily: 'Oatmeal Pro Regular',
  },
  containerValid: {
    position: 'absolute',
    justifyContent: 'center',
    right: theme.scaleWidth(16),
    top: theme.scaleHeight(16),
  },
  limitContainer: {
    alignItems: 'flex-end',
    marginTop: theme.scaleHeight(8),
  },
});
