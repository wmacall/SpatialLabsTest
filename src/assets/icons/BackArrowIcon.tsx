import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const BackArrowIcon = (props: SvgProps) => {
  return (
    <Svg width={10} height={16} viewBox="0 0 10 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.112.138a.47.47 0 010 .665L1.89 8l7.222 7.197a.47.47 0 010 .665.474.474 0 01-.668 0L.888 8.332a.47.47 0 010-.665L8.444.137a.473.473 0 01.668 0z"
        fill="#151515"
      />
    </Svg>
  );
};
