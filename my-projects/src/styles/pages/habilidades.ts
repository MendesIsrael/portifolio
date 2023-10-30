import { styled } from "@stitches/react";

export const HabilidadesContainer = styled('main',{
  backgroundColor       : '$black',
  textAlign             : 'center',

  h1: {
    marginBottom        : '3rem',
    color               : '$white',
  },

  p: {
    color               : '$white',
    textAlign           : 'justify',
  },
});

export const HabilidadesTitle = styled('main',{
  paddingTop            : '3rem',
});

export const NivelHabilidades = styled('main',{
  
});

export const Certificados = styled('main',{
  
});

export const CertificadosFour = styled('main',{
  display               : 'flex',
  justifyContent        : 'center',
  gap                   : '2rem',
  marginTop             : '2rem',
});

export const CertificadoOne = styled('main',{
  width                 : '25rem',

  '&:hover': {
    width               : '45rem',
    transition          : '.8s'
  }
});