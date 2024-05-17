import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
import {theme} from '../../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.scaleWidth(24),
    marginBottom: theme.scaleHeight(24),
    marginTop: theme.scaleHeight(8),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageUser: {
    width: theme.scaleWidth(64),
    height: theme.scaleWidth(64),
    borderRadius: theme.scaleWidth(32),
  },
  defaultImage: {
    width: theme.scaleWidth(64),
    height: theme.scaleWidth(64),
    borderRadius: theme.scaleWidth(32),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.DARK_SECONDARY,
  },
  containerInfo: {
    marginLeft: theme.scaleWidth(18),
  },
  contentContainerStyle: {
    alignSelf: 'center',
    alignItems: 'flex-start',
  },
  containerButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
});
