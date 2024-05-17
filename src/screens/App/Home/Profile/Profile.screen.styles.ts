import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants';
import {theme} from '../../../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    paddingHorizontal: theme.scaleWidth(24),
  },
  inputMultiline: {
    height: theme.scaleHeight(72),
  },
  containerButtonSignOut: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignSelf: 'center',
  },
  buttonSignOut: {
    backgroundColor: COLORS.DARK_SECONDARY,
    borderRadius: theme.scaleWidth(100),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: theme.scaleHeight(52),
    paddingHorizontal: theme.scaleWidth(20),
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.scaleHeight(10),
  },
  buttonBack: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
  },
});
