import * as React from 'react';
import Svg, {Rect, Path, SvgProps} from 'react-native-svg';

export const SubstackIcon = (props: SvgProps) => {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <Rect width={40} height={40} rx={12} fill="#fff" />
      <Path
        d="M29.166 14.505h-17.5v2.364h17.5v-2.364zM11.667 19.01V30l8.749-4.908L29.166 30V19.01h-17.5zM29.166 10h-17.5v2.363h17.5V10z"
        fill="#FF6719"
      />
    </Svg>
  );
};
