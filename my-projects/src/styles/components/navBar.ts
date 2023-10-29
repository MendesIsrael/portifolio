import { styled } from "@stitches/react";

export const Menu = styled('div', {
  position            : 'absolute',
  height              : '3rem',
  width               : '100%',
});

export const NavPages = styled('div', {
  justifyContent      : 'center',
  display             : 'flex',
  listStyle           : 'none',

  a: {
    textDecoration    : 'none',
    textTransform     : 'uppercase',
    padding           : '1rem',
    color             : '$white',
  }
});
