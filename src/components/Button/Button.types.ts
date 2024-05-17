import {StyleProp, ViewStyle} from 'react-native';
import {COLORS} from '../../constants';
import {IconName} from '../Icon';
import {TypographyVariant} from '../Typography/Typography.types';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'rounded'
  | 'rounded_small'
  | 'rounded_medium';

export interface ButtonProps {
  onPress: () => void;
  text?: string;
  isDisabled?: boolean;
  variant?: ButtonVariant;
  icon?: IconName;
  buttonColor?: keyof typeof COLORS;
  style?: StyleProp<ViewStyle>;
  textVariant?: TypographyVariant;
}
