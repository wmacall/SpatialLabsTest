import * as React from 'react';
import Svg, {Rect, Path, SvgProps} from 'react-native-svg';

export const TidalIcon = (props: SvgProps) => {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <Rect width={40} height={40} rx={12} fill="#000" />
      <Rect width={40} height={40} rx={12} fill="#000" />
      <Path
        d="M11.67 15.83L10 17.5l1.66 1.66c.91.912 1.666 1.66 1.678 1.66.01 0 .766-.748 1.68-1.66l1.659-1.66 1.659 1.66 1.659 1.66-1.67 1.67-1.668 1.67 1.669 1.67 1.669 1.67 1.67-1.67 1.668-1.67-1.665-1.666-1.663-1.664 1.665-1.666 1.663-1.664L25 19.164l1.663 1.666 1.669-1.67L30 17.49l-1.67-1.67-1.668-1.67-1.67 1.67-1.669 1.67-1.665-1.666-1.663-1.664-1.665 1.664-1.663 1.666L15 15.824l-1.663-1.664-1.669 1.67z"
        fill="#fff"
      />
    </Svg>
  );
};
