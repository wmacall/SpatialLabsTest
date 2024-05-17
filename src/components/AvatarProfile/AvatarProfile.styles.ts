import {StyleSheet} from 'react-native';
import {theme} from '../../utils';
import {COLORS} from '../../constants';

export default StyleSheet.create({
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
  userImage: {
    width: theme.scaleHeight(100),
    height: theme.scaleHeight(100),
    borderRadius: theme.scaleHeight(50),
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
