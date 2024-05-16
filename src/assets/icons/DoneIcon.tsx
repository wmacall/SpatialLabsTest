import * as React from 'react';
import Svg, {Rect, Path, SvgProps} from 'react-native-svg';

export const DoneIcon = (props: SvgProps) => {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Rect width={16} height={16} rx={8} fill="#12CC50" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.62 6.213a.157.157 0 010 .222L7.275 9.787a.157.157 0 01-.222 0L5.38 8.111a.157.157 0 01.222-.222l1.562 1.565L10.4 6.213a.157.157 0 01.222 0z"
        fill="#fff"
        stroke="#fff"
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
