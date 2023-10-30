import { styled } from "@stitches/react";

export const HomeContainer = styled('main',{
  display               : 'flex',
  backgroundColor       : 'Black',
  justifyContent        : 'center',

});

export const TitleTxt = styled('div', {
color                   : '$green100',
textAlign               : 'center',
fontSize                : '2rem',
  
});

export const ContainerGray = styled('div', {
  display               : 'flex',

});
/*--------------------------------------------------------------------- */

export const Title = styled('div', {
  display               : 'flex',
  height                : '35rem',
  justifyContent        : 'center',
  alignItems            : 'center',
  backgroundColor       : '$black',

  Image: {
    height              : '2rem'
  }
});


/*--------------------------------------------------------------------- */

export const Resumo = styled('div', {
  width                 : '60rem',
  backgroundColor       : '$black100',
  borderRadius          : '8px',
  boxShadow             : '0px 0px 3px gray'

});

export const ImgPerfil = styled('div', {
  
  width                 : '30rem',
  marginTop             : '3rem',
  justifyContent        : 'center',

});


export const TxtResumo = styled('div', {
  width                 : '55rem',
  textAlign             : 'center',
  margin                : '5rem',
  

  p: {
    color               : '$white',
  },
});