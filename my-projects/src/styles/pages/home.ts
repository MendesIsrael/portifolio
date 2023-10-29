import { styled } from "@stitches/react";

export const HomeContainer = styled('main',{
  backgroundColor       : 'Black',
  height                : '40rem',

  h1: {
    color               : '$with',
  }
});
/*--------------------------------------------------------------------- */

export const Title = styled('div', {
  display               : 'flex',
  height                : '40rem',
  width                 : '100%',
  backgroundColor       : 'gray',

  Image: {
    height: '2rem'
  }
});

export const ImgPerfil = styled('div', {
  position              : 'absolute',
  height                : '15rem',
  width                 : '15rem',
  margin                : '18rem auto auto 2rem',
  backgroundColor       : 'Purple',
  borderRadius          : '8px',
  boxShadow             : '2px 0px 10px white',
  outline               : '4px solid $blue100',
});
/*--------------------------------------------------------------------- */

export const Resumo = styled('div', {
  margin                : '5rem',
  textAlign             : 'center',
  

  h1: {
    fontSize            : '2.5rem',
    color               : 'white',
    margin              : '1.5rem',
    
  },

  p: {
    color               : 'white',
  },
})