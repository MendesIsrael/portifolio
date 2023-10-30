import { styled } from "@stitches/react";

export const Menu = styled('div', {
  display             : 'flex',
  position            : 'absolute',
  height              : '2rem',
  width               : '100%',
  alignItems          : 'center',
  justifyContent      : 'center',
  margin              : '.25rem',
  
});

export const NavPages = styled('div', {
  justifyContent      : 'center',
  display             : 'flex',
  listStyle           : 'none',
  gap                 : '1rem',

  a: {
    textDecoration    : 'none',
    textTransform     : 'uppercase',
    padding           : '0.3rem',
    color             : 'gray',    
    borderRadius      : '5px',

    '&:hover': { 
      color           : '$white',
      fontWeight      : '600',
      boxShadow       : '1px 1px 6px white',
    }
  }
});
