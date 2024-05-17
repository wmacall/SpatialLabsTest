import * as React from 'react';
import Svg, {
  Rect,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  SvgProps,
} from 'react-native-svg';

export const InstagramIcon = (props: SvgProps) => {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <Rect width={40} height={40} rx={12} fill="url(#paint0_linear_242_418)" />
      <G clipPath="url(#clip0_242_418)" fill="#fff">
        <Path d="M20 11.8c2.672 0 2.988.012 4.04.06.976.042 1.503.206 1.855.343.464.18.8.399 1.148.746.352.352.566.684.746 1.149.137.351.3.882.344 1.855.047 1.055.058 1.371.058 4.04 0 2.671-.011 2.988-.058 4.038-.043.977-.207 1.504-.344 1.856-.18.465-.398.8-.746 1.148a3.077 3.077 0 01-1.148.746c-.352.137-.883.301-1.856.344-1.055.047-1.371.059-4.039.059-2.672 0-2.988-.012-4.04-.059-.976-.043-1.503-.207-1.855-.344-.464-.18-.8-.398-1.148-.746a3.077 3.077 0 01-.746-1.148c-.137-.352-.3-.883-.344-1.856-.047-1.054-.058-1.37-.058-4.039 0-2.672.011-2.988.058-4.039.043-.976.207-1.504.344-1.855.18-.465.398-.801.746-1.149a3.077 3.077 0 011.148-.746c.352-.137.883-.3 1.856-.344 1.05-.046 1.367-.058 4.039-.058zm0-1.8c-2.715 0-3.055.012-4.121.059-1.063.046-1.793.218-2.426.464a4.881 4.881 0 00-1.773 1.157 4.901 4.901 0 00-1.157 1.77c-.246.636-.418 1.363-.464 2.425C10.012 16.945 10 17.285 10 20s.012 3.055.059 4.121c.046 1.063.218 1.793.464 2.426.258.66.598 1.219 1.157 1.773a4.888 4.888 0 001.77 1.153c.636.246 1.363.418 2.425.465 1.066.046 1.406.058 4.121.058 2.715 0 3.055-.012 4.121-.058 1.063-.047 1.793-.22 2.426-.465a4.888 4.888 0 001.77-1.153 4.888 4.888 0 001.152-1.77c.246-.636.418-1.363.465-2.425.047-1.066.058-1.406.058-4.121 0-2.715-.011-3.055-.058-4.121-.047-1.063-.22-1.793-.465-2.426a4.683 4.683 0 00-1.145-1.777 4.89 4.89 0 00-1.77-1.153c-.636-.246-1.363-.418-2.425-.464C23.055 10.011 22.715 10 20 10z" />
        <Path d="M20 14.863A5.138 5.138 0 0014.863 20a5.138 5.138 0 0010.273 0c0-2.836-2.3-5.137-5.136-5.137zm0 8.469a3.333 3.333 0 11.001-6.665A3.333 3.333 0 0120 23.332zM26.54 14.66a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_242_418"
          x1={-13.4}
          y1={-2.60417}
          x2={56.038}
          y2={29.7515}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F9CE34" />
          <Stop offset={0.505} stopColor="#EE2A7B" />
          <Stop offset={1} stopColor="#6228D7" />
        </LinearGradient>
        <ClipPath id="clip0_242_418">
          <Path fill="#fff" transform="translate(10 10)" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};