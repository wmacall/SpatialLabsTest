import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const CloseIcon = (props: SvgProps) => {
  return (
    <Svg width={10} height={10} viewBox="0 0 10 10" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.069 1.069a.235.235 0 01.333 0L5 4.667 8.598 1.07a.235.235 0 11.333.333L5.333 5 8.93 8.598a.235.235 0 11-.333.333L5 5.333 1.402 8.93a.235.235 0 11-.333-.333L4.667 5 1.07 1.402a.235.235 0 010-.333z"
        fill="#212121"
        stroke="#212121"
        strokeWidth={0.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
