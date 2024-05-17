import {StyleSheet} from 'react-native';
import {theme} from '../../utils';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.scaleHeight(16),
    paddingHorizontal: theme.scaleWidth(8),
    paddingVertical: theme.scaleHeight(6),
    width: '100%',
    backgroundColor: COLORS.DARK_SECONDARY,
    borderRadius: theme.scaleHeight(16),
  },
  containerImage: {
    height: theme.scaleHeight(40),
    width: theme.scaleHeight(40),
    borderRadius: theme.scaleHeight(12),
    backgroundColor: 'pink',
  },
  containerSocial: {
    flexDirection: 'row',
    marginLeft: theme.scaleWidth(24),
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    paddingLeft: theme.scaleWidth(4),
    height: theme.scaleHeight(28),
    width: theme.scaleWidth(171),
  },
  containerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerIcon: {
    paddingRight: theme.scaleWidth(16),
    paddingLeft: theme.scaleWidth(12),
  },
});
