import { HomeContainer, ImgPerfil, Resumo, Title } from "@/styles/pages/home"
import Image from "next/image"


import myPhoto from '../assets/perfil-1.png'
import mergulho from '../assets/capa-2.png'

export default function Home() {
  return (
    <>
      <HomeContainer>
        <Title>
        <video src={require('../assets/capa-4.mp4')} autoPlay loop muted />
          <ImgPerfil>
            <Image src={myPhoto} layout="responsive" alt="israel"/>
          </ImgPerfil>
        </Title>
        <Resumo>
          <h1>ISRAEL MENDES DA SILVA</h1>
          <p>O idealizador Israel, formado em bacharel e licenciatura de educação física no Centro Universitário São José; está cursando o ensino superior de ciência da computação na Descomplica e formado nos cursos de excel básico; organização e produtividade; técnicas e ferramentas para gestão de projetos e produtos; introdução ao desenvolvimento web; desenvolvimento web HTML5 + CSS3; micro empreendedor individual; e, sargento do exécito brasileiro da brigada de infataria paraquedista, é casado com a Sr Rafaela de Sá.</p>
        </Resumo>
      </HomeContainer>
    </>
  )
}
