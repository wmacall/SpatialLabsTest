import * as React from 'react';
import Svg, {Rect, G, Path, Defs, ClipPath, SvgProps} from 'react-native-svg';

export const TwitchIcon = (props: SvgProps) => {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <Rect width={40} height={40} rx={12} fill="#fff" />
      <G clipPath="url(#clip0_242_130)">
        <Path
          d="M27.977 20.12l-2.857 2.856h-2.858l-2.5 2.5v-2.5h-3.214V12.262h11.429v7.857z"
          fill="#fff"
        />
        <Path
          d="M15.834 10.833l-3.572 3.572v12.857h4.286v3.571l3.572-3.571h2.857l6.428-6.429v-10H15.834zm12.143 9.286l-2.857 2.857h-2.858l-2.5 2.5v-2.5h-3.214V12.262h11.429v7.857z"
          fill="#9146FF"
        />
        <Path
          d="M25.834 14.762h-1.429v4.286h1.429v-4.286zM21.905 14.762h-1.428v4.286h1.428v-4.286z"
          fill="#9146FF"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_242_130">
          <Path
            fill="#fff"
            transform="translate(10.833 10.833)"
            d="M0 0H20V20H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
