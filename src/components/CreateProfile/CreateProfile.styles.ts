import {StyleSheet} from 'react-native';
import {theme} from '../../utils';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    paddingHorizontal: theme.scaleWidth(24),
  },
  title: {
    marginTop: theme.scaleHeight(80),
  },
  description: {
    marginTop: theme.scaleHeight(8),
  },
  containerUserImage: {
    width: theme.scaleHeight(100),
    height: theme.scaleHeight(100),
    borderRadius: theme.scaleHeight(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.DARK_SECONDARY,
    alignSelf: 'center',
    marginTop: theme.scaleHeight(60),
    marginBottom: theme.scaleHeight(32),
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  inputMultiline: {
    marginTop: theme.scaleHeight(16),
    height: theme.scaleHeight(72),
  },
  containerNextButton: {
    position: 'absolute',
    width: '100%',
    bottom: theme.scaleHeight(72),
    alignSelf: 'center',
  },
});
