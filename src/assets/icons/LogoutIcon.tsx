import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const LogoutIcon = (props: SvgProps) => {
  return (
    <Svg width={18} height={16} viewBox="0 0 18 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.862 7.667a.47.47 0 010 .666l-2.51 2.51a.47.47 0 11-.665-.666l1.706-1.706H7.327a.47.47 0 110-.941h8.066l-1.706-1.707a.47.47 0 11.665-.665l2.51 2.51zm-5.51-5.366c.402.402.628.948.628 1.516v.837a.47.47 0 01-.94 0v-.837a1.203 1.203 0 00-1.203-1.202H3.144A1.203 1.203 0 001.94 3.817v8.366a1.203 1.203 0 001.203 1.203h6.693a1.202 1.202 0 001.202-1.203v-.836a.47.47 0 01.941 0v.836a2.144 2.144 0 01-2.143 2.144H3.144A2.144 2.144 0 011 12.183V3.817a2.144 2.144 0 012.144-2.144h6.693c.568 0 1.114.226 1.515.628z"
        fill="#F34"
        stroke="#F34"
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
