import {StyleSheet} from 'react-native';
import {theme} from '../../utils';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    paddingHorizontal: theme.scaleWidth(24),
  },
  containerFinish: {
    position: 'absolute',
    width: '100%',
    alignSelf: 'center',
    bottom: theme.scaleHeight(24),
    backgroundColor: COLORS.PRIMARY,
    paddingTop: theme.scaleHeight(20),
  },
  contentContainerStyle: {
    paddingBottom: theme.scaleHeight(100),
  },
  description: {
    marginTop: theme.scaleHeight(8),
    marginBottom: theme.scaleHeight(32),
  },
});
