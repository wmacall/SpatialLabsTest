import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const EditIcon = (props: SvgProps) => {
  return (
    <Svg width={11} height={11} viewBox="0 0 11 11" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.672.165a2.166 2.166 0 012.36 3.533l-.654.654-.001.001-6.222 6.222a.314.314 0 01-.222.092H.313A.314.314 0 010 10.353v-2.62c0-.083.033-.163.092-.222L6.969.634c.2-.2.44-.36.703-.47zm-1.136 1.79L.627 7.863v2.176h2.177l5.908-5.908-2.176-2.176zm2.62 1.732L6.978 1.511l.433-.433A1.539 1.539 0 019.59 3.254l-.434.433z"
        fill="#151515"
      />
    </Svg>
  );
};
