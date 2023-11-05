import { styled } from "@stitches/react";

export const Portifolios = styled ('div', {
  display               : 'grid',
  alignItems            : 'center',
  justifyContent        : 'center',
  gap                   : '2rem',
  backgroundColor       : "Aqua",
});

export const ThreeSites = styled ('div', {
  display               : 'flex',
  gap                   : '4rem',
  backgroundColor       : "red",

});

export const Sites = styled ('div', {
  height                : '20rem',
  width                 : '20rem',
  backgroundColor       : "BlueViolet",

  '&:hover': {
    height              : '25rem',
    width               : '25rem',
  }

});