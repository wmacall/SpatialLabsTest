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
    bottom: 0,
  },
});
