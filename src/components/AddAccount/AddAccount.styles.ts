import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';
import {theme} from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerModal: {
    backgroundColor: COLORS.WHITE,
    borderTopLeftRadius: theme.scaleWidth(32),
    borderTopRightRadius: theme.scaleWidth(32),
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '85%',
    paddingHorizontal: theme.scaleWidth(24),
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.scaleHeight(24),
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.DARK_SECONDARY,
    borderRadius: theme.scaleWidth(8),
    height: theme.scaleHeight(52),
    paddingHorizontal: theme.scaleWidth(16),
    marginTop: theme.scaleHeight(16),
  },
  input: {
    paddingLeft: theme.scaleWidth(4),
    height: theme.scaleHeight(28),
    width: theme.scaleWidth(171),
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY,
    height: theme.scaleHeight(64),
    borderRadius: theme.scaleWidth(40),
    paddingHorizontal: theme.scaleWidth(12),
    marginTop: theme.scaleHeight(42),
  },
});
