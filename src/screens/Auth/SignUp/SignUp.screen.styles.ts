import {StyleSheet} from 'react-native';
import {theme} from '../../../utils';
import {COLORS} from '../../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    paddingHorizontal: theme.scaleWidth(24),
  },
  imageDot: {
    width: theme.scaleWidth(160),
    height: theme.scaleHeight(160),
    alignSelf: 'center',
    marginVertical: theme.scaleHeight(36),
  },
  description: {
    marginTop: theme.scaleHeight(4),
    marginBottom: theme.scaleHeight(24),
  },
  containerGetStarted: {
    marginTop: theme.scaleHeight(32),
  },
  containerBack: {
    marginTop: theme.scaleHeight(64),
  },
  echoSecured: {
    marginTop: theme.scaleHeight(8),
    marginBottom: theme.scaleHeight(16),
  },
  containerCreateAccount: {
    marginTop: theme.scaleHeight(24),
  },
  inputSignUp: {
    marginTop: theme.scaleHeight(16),
  },
});
