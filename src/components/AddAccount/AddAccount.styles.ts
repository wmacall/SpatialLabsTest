import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';
import {theme} from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  containerModal: {
    backgroundColor: COLORS.PRIMARY,
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
  dropdown: {
    height: theme.scaleHeight(52),
    backgroundColor: COLORS.DARK_SECONDARY,
    borderRadius: theme.scaleWidth(8),
    paddingHorizontal: theme.scaleWidth(16),
  },
  rowDropdown: {
    flexDirection: 'row',
    backgroundColor: COLORS.DARK_SECONDARY,
    shadowColor: undefined,
    shadowOffset: undefined,
    shadowOpacity: undefined,
    shadowRadius: undefined,
    elevation: undefined,
    alignItems: 'center',
    paddingHorizontal: theme.scaleWidth(16),
    paddingVertical: theme.scaleHeight(8),
  },
  containerIcon: {
    transform: [
      {
        rotate: '270deg',
      },
    ],
  },
  socialName: {
    marginLeft: theme.scaleWidth(16),
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
    backgroundColor: COLORS.DARK_SECONDARY,
    height: theme.scaleHeight(64),
    borderRadius: theme.scaleWidth(40),
    paddingHorizontal: theme.scaleWidth(12),
    marginTop: theme.scaleHeight(42),
  },
  containerEmpty: {
    height: theme.scaleHeight(151),
    width: theme.scaleWidth(151),
    backgroundColor: COLORS.DARK_SECONDARY,
    borderRadius: theme.scaleWidth(24),
    alignSelf: 'center',
    padding: theme.scaleWidth(16),
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  logo: {
    width: theme.scaleWidth(40),
    height: theme.scaleHeight(40),
    borderRadius: theme.scaleWidth(12),
    backgroundColor: COLORS.TERTIARY,
  },
  username: {
    width: theme.scaleWidth(110),
    height: theme.scaleHeight(20),
    borderRadius: theme.scaleWidth(100),
    backgroundColor: COLORS.TERTIARY,
  },
  containerLeftIcon: {
    marginRight: theme.scaleWidth(16),
  },
});
