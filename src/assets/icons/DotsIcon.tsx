import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const DotsIcon = (props: SvgProps) => {
  return (
    <Svg width={16} height={12} viewBox="0 0 16 12" fill="none" {...props}>
      <Path
        d="M0 5.992a1.412 1.412 0 102.824 0 1.412 1.412 0 00-2.824 0zM6.588 5.992a1.412 1.412 0 102.824 0 1.412 1.412 0 00-2.824 0zM13.177 5.992a1.412 1.412 0 102.823 0 1.412 1.412 0 00-2.823 0z"
        fill="#151515"
      />
    </Svg>
  );
};
