import * as React from 'react';
import Svg, {
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';

export const AppleMusicIcon = (props: SvgProps) => {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <Rect
        width={40}
        height={40}
        rx={12}
        fill="url(#paint0_linear_242_1016)"
      />
      <Path
        d="M17.317 25.922V17.04c0-.334.186-.537.556-.611l7.67-1.554c.407-.075.63.11.666.555v6.773c0 .555-.833.925-2.5 1.11-3.168.5-2.668 5.83 1.667 4.386 1.667-.61 1.945-2.22 1.945-3.83V10.876s0-1.11-.945-.832l-9.448 1.943s-.722.11-.722.999v11.27c0 .555-.833.925-2.5 1.11-3.168.5-2.668 5.83 1.667 4.386 1.667-.61 1.944-2.22 1.944-3.83z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_242_1016"
          x1={20}
          y1={0}
          x2={20}
          y2={40}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F94C57" />
          <Stop offset={1} stopColor="#FC3C44" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
