import {StyleSheet} from 'react-native';
import {theme} from '../../utils';

export default StyleSheet.create({
  baseStyle: {
    fontFamily: 'Oatmeal Pro Regular',
    fontSize: theme.scaleFont(18),
    fontWeight: '500',
  },
  h3: {
    fontSize: theme.scaleFont(32),
    lineHeight: theme.scaleFont(48),
  },
  h4: {
    fontSize: theme.scaleFont(24),
    lineHeight: theme.scaleFont(36),
  },
  h5: {
    fontSize: theme.scaleFont(18),
    lineHeight: theme.scaleFont(28),
  },
  h6: {
    fontSize: theme.scaleFont(16),
    lineHeight: theme.scaleFont(24),
    fontWeight: '400',
  },
  paragraph: {
    fontSize: theme.scaleFont(14),
    lineHeight: theme.scaleFont(20),
    fontWeight: '500',
  },
  small: {
    fontSize: theme.scaleFont(12),
    lineHeight: theme.scaleFont(16),
    fontWeight: '400',
  },
});
