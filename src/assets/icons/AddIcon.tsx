import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const AddIcon = (props: SvgProps) => {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        d="M11.838 1.588a.838.838 0 00-1.676 0v8.574H1.588a.838.838 0 000 1.676h8.574v8.574a.838.838 0 101.676 0v-8.574h8.574a.838.838 0 000-1.676h-8.574V1.588z"
        fill="#fff"
        stroke="#fff"
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
