import { styled } from "@stitches/react";

export const Menu = styled('div', {
  display             : 'flex',
  position            : 'absolute',
  height              : '2rem',
  width               : '100%',
  alignItems          : 'center',
  justifyContent      : 'center',
  margin              : '.25rem',

  zIndex:'100'
  
});

export const NavPages = styled('div', {
  justifyContent      : 'center',
  display             : 'flex',
  listStyle           : 'none',
  gap                 : '1rem',


  a: {
    position          : 'relative',
    textDecoration    : 'none',
    textTransform     : 'uppercase',
    padding           : '0.3rem',
    color             : '$green200',    
    overflow          : 'hidden',
    fontWeight        : '550',
    
  

  '&::before': {
    content           : '',
    position          : 'absolute',
    width             : '0',
    height            : '100%',
    zIndex            : '-1',
    top               : '0',
    left              : '0',
    transition        : 'all .7s',
    background        : '$white',
  },

  '&:hover::before': {
    width             : '100%',
  },
    

    '&:hover': { 
      color           : '$black',
      boxShadow       : '1px 1px 4px white',
      transition      : '.4s',
    }
  },

});
