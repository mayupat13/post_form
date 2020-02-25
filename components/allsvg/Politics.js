import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

function Politics() {
  return (
    <Svg width={30} height={30} viewBox="0 0 128 128">
      <G transform="translate(16)" fillRule="nonzero" fill="none">
        <Circle fill="#4039B3" cx={48} cy={16} r={16} />
        <Path
          d="M59.467 37.333H36.533c-8.384 0-15.2 7.11-15.2 15.84v4.16c0 2.208 1.792 4 4 4s4-1.792 4-4h37.334c0 2.208 1.792 4 4 4s4-1.792 4-4v-4.16c0-8.73-6.816-15.84-15.2-15.84z"
          fill="#5E56E7"
        />
        <Path
          d="M89.835 54.885a4.01 4.01 0 00-3.168-1.552H9.333a4.01 4.01 0 00-3.168 1.552 4.012 4.012 0 00-.704 3.456l17.334 66.667A4 4 0 0026.667 128h42.666a4 4 0 003.872-2.992L90.54 58.341a4.03 4.03 0 00-.704-3.456z"
          fill="#E8E7FF"
        />
        <Path
          d="M68.512 70.901a4.007 4.007 0 00-3.179-1.568H30.667a4.007 4.007 0 00-3.179 1.568 4.008 4.008 0 00-.688 3.472l9.333 34.667A4.012 4.012 0 0040 112h16a4.012 4.012 0 003.867-2.96L69.2 74.373c.32-1.2.064-2.485-.688-3.472z"
          fill="#FAFAFA"
        />
        <Path
          d="M90.667 128H5.333A5.332 5.332 0 010 122.667a5.332 5.332 0 015.333-5.334h85.334c2.949 0 5.333 2.39 5.333 5.334A5.332 5.332 0 0190.667 128z"
          fill="#D3D1EE"
        />
      </G>
    </Svg>
  )
}

export default Politics
