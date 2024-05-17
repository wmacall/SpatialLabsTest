import * as React from 'react';
import Svg, {Rect, Path, SvgProps} from 'react-native-svg';

export const XIcon = (props: SvgProps) => {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <Rect width={40} height={40} rx={12} fill="#000" />
      <Path
        d="M25.272 11.586h2.811l-6.142 7.02 7.226 9.552h-5.658l-4.43-5.793-5.07 5.793h-2.814l6.57-7.508-6.932-9.063h5.801l4.006 5.295 4.632-5.296zm-.987 14.89h1.558L15.788 13.18h-1.672l10.17 13.295z"
        fill="#fff"
      />
    </Svg>
  );
};
