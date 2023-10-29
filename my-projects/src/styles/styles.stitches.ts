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
      transparent : 'rgba(0, 0, 0, 0.452)',
      blue100     : '#11DFFA',
      blue200     : '#36B6C7',
    }
  }
})