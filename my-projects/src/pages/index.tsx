import { ContainerGray, HomeContainer, ImgPerfil, Resumo, Title, TitleTxt, TxtResumo } from "@/styles/pages/home"
import Image from "next/image"


import myPhoto from '../assets/israel-3x4.png'

export default function Home() {
  return (
    <>
      <Title>
        <video src={require('../assets/capa-3.mp4')} autoPlay loop muted />
      </Title>
      <HomeContainer>

        <Resumo>
          <TitleTxt>
            <h1>UM POUCO SOBRE MIM</h1>
          </TitleTxt>
          <ContainerGray>
            <ImgPerfil>
              <Image src={myPhoto} layout="responsive" alt="israel"/>
            </ImgPerfil>
            <TxtResumo>
              <p>Olá! Me chamo Israel mendes, sou carioca e nasci em outubro de 1996. 
                Meu objetivo é me tornar um desenvolvedor fullstack senior, mas ainda preciso percorrer um longo caminho para me tornar um. Quero adquirir mais experiências na área da tecnologia da informação e, finalmente conseguir o meu primeiro emprego no ramo.
              </p>
              <p>
                Gosto muito de criar coisas e esse é um dos motivos em querer me tornar um desenvolvedor fullstack. 
              </p>
              <p>Sou formado em Educação Física, licenciatura e bacharelado, pelo Centro Universitário São José desde 2022. Mas não parei por aí e iniciei a minha segunda formação, só que agora na área de TI. Estou cursando Ciência da Computação pela Faculdade Descomplica e vou mergulhar cada vez mais fundo nessa área.</p>
            </TxtResumo>
          </ContainerGray>
        </Resumo>
        
      </HomeContainer>
    </>
  )
}
