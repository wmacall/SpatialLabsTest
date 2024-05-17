import * as React from 'react';
import Svg, {Rect, G, Path, Defs, ClipPath, SvgProps} from 'react-native-svg';

export const FigmaIcon = (props: SvgProps) => {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <Rect width={40} height={40} rx={12} fill="#1E1E1E" />
      <G clipPath="url(#clip0_242_894)">
        <Path
          d="M16.667 30A3.335 3.335 0 0020 26.667v-3.334h-3.333a3.335 3.335 0 000 6.667z"
          fill="#0ACF83"
        />
        <Path
          d="M13.333 20a3.335 3.335 0 013.334-3.333H20v6.666h-3.333A3.335 3.335 0 0113.333 20z"
          fill="#A259FF"
        />
        <Path
          d="M13.333 13.333A3.335 3.335 0 0116.667 10H20v6.667h-3.333a3.334 3.334 0 01-3.334-3.334z"
          fill="#F24E1E"
        />
        <Path d="M20 10h3.333a3.334 3.334 0 010 6.667H20V10z" fill="#FF7262" />
        <Path
          d="M26.667 20a3.335 3.335 0 01-3.334 3.334A3.335 3.335 0 0120 20a3.335 3.335 0 013.333-3.333A3.335 3.335 0 0126.667 20z"
          fill="#1ABCFE"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_242_894">
          <Path fill="#fff" transform="translate(10 10)" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
