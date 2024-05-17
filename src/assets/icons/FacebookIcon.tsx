import * as React from 'react';
import Svg, {Rect, Path, SvgProps} from 'react-native-svg';

export const FacebookIcon = (props: SvgProps) => {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <Rect width={40} height={40} rx={12} fill="#0866FF" />
      <Path
        d="M24.468 21.479l.689-3.75h-4.008v-1.327c0-1.981.777-2.744 2.79-2.744.624 0 1.127.016 1.417.046v-3.4c-.549-.152-1.89-.304-2.668-.304-4.1 0-5.991 1.936-5.991 6.113v1.616h-2.53v3.75h2.53v8.16a12.294 12.294 0 004.451.271V21.48h3.32z"
        fill="#fff"
      />
    </Svg>
  );
};
