import {COLORS} from '../../constants';
import {IconName} from '../Icon';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'rounded'
  | 'rounded_small';

export interface ButtonProps {
  onPress: () => void;
  text?: string;
  isDisabled?: boolean;
  variant?: ButtonVariant;
  icon?: IconName;
  buttonColor?: keyof typeof COLORS;
}
