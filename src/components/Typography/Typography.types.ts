import {PropsWithChildren} from 'react';
import {COLORS} from '../../constants';

export type TypographyVariant =
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'paragraph'
  | 'small';

export interface TypographyProps extends PropsWithChildren {
  variant?: TypographyVariant;
  textColor?: keyof typeof COLORS;
}
