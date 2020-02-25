import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

function Humor() {
  return (
    <Svg width={30} height={30} viewBox="0 0 128 128">
      <G fillRule="nonzero" fill="none">
        <Circle fill="#5E56E7" cx={63.991} cy={63.991} r={63.991} />
        <Path
          d="M21.979 64.033c0 23.2 18.808 42.008 42.008 42.008 23.2 0 42.009-18.808 42.009-42.008H21.979z"
          fill="#FFF"
        />
        <G fill="#D3D1EE">
          <Path d="M45.294 64.033v37.619a41.735 41.735 0 005.052 2.111v-39.73h-5.052zM76.508 64.033v40.11a41.742 41.742 0 005.052-1.956V64.033h-5.052z" />
        </G>
        <G fill="#E8E7FF">
          <Path d="M59.188 42.88c-.455-8.44-6.479-14.463-14.918-14.917-8.42-.454-14.5 7.162-14.918 14.918-.176 3.257 4.877 3.24 5.052 0 .686-12.716 19.048-12.716 19.732 0 .175 3.24 5.228 3.257 5.052 0zM95.59 42.88c-.454-8.44-6.478-14.463-14.917-14.917-8.421-.454-14.5 7.162-14.918 14.918-.176 3.257 4.877 3.24 5.052 0 .685-12.716 19.047-12.716 19.732 0 .175 3.24 5.228 3.257 5.052 0z" />
        </G>
      </G>
    </Svg>
  )
}

export default Humor
