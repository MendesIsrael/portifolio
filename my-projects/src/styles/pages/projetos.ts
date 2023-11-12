import { styled } from "@stitches/react";

export const Portifolios = styled ('div', {
  display               : 'grid',
  alignItems            : 'center',
  justifyContent        : 'center',
  gap                   : '2rem',
});

export const ThreeSites = styled ('div', {
  display               : 'flex',
  gap                   : '2rem',

  '&:hover': {
    gap                 : '.5rem',
    transition          : '.8s',

  }

});

export const Sites = styled ('div', {
  width                 : '25rem',

  '&:hover': {
    width               : '33rem',
    transition          : '.8s',
  },

  a: {
    color               : 'black',
    backgroundColor     : 'black',
    '&:hover': {
      transition          : '1s',
      color               : 'Blue',
      backgroundColor     : 'Aqua',
      
    },
  },

});

export const NavBarSite = styled ('div', {
  height                : '2rem',
  borderRadius          : '0 0 8px 8px',
  

  
  
  

});