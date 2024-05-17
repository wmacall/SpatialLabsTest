import * as React from 'react'
import Svg, {Rect, G, Path, Defs, ClipPath, SvgProps} from 'react-native-svg'

export const YoutubeIcon = (props: SvgProps) => {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <Rect width={40} height={40} rx={12} fill="#fff" />
      <G clipPath="url(#clip0_242_937)">
        <Path
          d="M29.602 15.155a2.515 2.515 0 00-1.768-1.78c-1.564-.42-7.814-.42-7.814-.42s-6.25 0-7.814.42a2.514 2.514 0 00-1.768 1.78C10.02 16.724 10.02 20 10.02 20s0 3.275.418 4.845a2.514 2.514 0 001.768 1.78c1.564.42 7.814.42 7.814.42s6.25 0 7.814-.42a2.514 2.514 0 001.768-1.78c.418-1.57.418-4.845.418-4.845s0-3.275-.418-4.845z"
          fill="#FF0302"
        />
        <Path d="M17.974 22.974v-5.948L23.203 20l-5.228 2.974z" fill="#FEFEFE" />
      </G>
      <Defs>
        <ClipPath id="clip0_242_937">
          <Path fill="#fff" transform="translate(10 10)" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
