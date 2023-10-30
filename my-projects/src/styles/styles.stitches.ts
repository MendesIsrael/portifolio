import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  media: {
    bp1: '(max-width: 400px)',
    bp2: '(max-width: 700px)',
    bp3: '(max-width: 900px)',
  },
  theme: {
    colors: {
      white       : '#fff',
      black       : '#000',
      black100    : '#090909',
      gray100     : '#575757',
      gray150     : '#808080',
      transparent : 'rgba(0, 0, 0, 0.452)',
      green100    : '#A9DB2A',
      green150    : '#8DB823',
      green200    : '#6E8F1B',
      green250    : '#6E8F1B',
      green300    : '#2F3D0C',
    }
  }
})