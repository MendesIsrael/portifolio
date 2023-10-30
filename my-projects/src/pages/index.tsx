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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur unde velit eius eveniet dolorum perspiciatis error rerum quia officiis corporis sed quaerat, provident totam eos dolores, minima quo similique?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi delectus praesentium explicabo laudantium nihil ad id vel dolores, accusamus aspernatur qui cupiditate tenetur libero, quia repellat sit quae, tempore laborum?</p>
            </TxtResumo>
          </ContainerGray>
        </Resumo>
        
      </HomeContainer>
    </>
  )
}
