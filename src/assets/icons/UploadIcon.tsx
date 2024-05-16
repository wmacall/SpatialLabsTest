import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const UploadIcon = (props: SvgProps) => {
  return (
    <Svg width={11} height={11} viewBox="0 0 11 11" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.111.092a.314.314 0 01.444 0l2.953 2.953a.314.314 0 01-.444.443L5.647 1.071v6.33a.314.314 0 11-.627 0V1.07L2.602 3.488a.314.314 0 01-.443-.443L5.11.092zM.61 7.677c.173 0 .314.14.314.314v1.18a.867.867 0 00.867.868h7.087a.867.867 0 00.867-.867V7.99a.314.314 0 01.627 0v1.18a1.495 1.495 0 01-1.494 1.496H1.79A1.495 1.495 0 01.295 9.172V7.99c0-.173.14-.314.314-.314z"
        fill="#151515"
      />
    </Svg>
  );
};
