import { ContainerGlobal, HabilidadesTitle } from "@/styles/pages/habilidades";
import { NavBarSite, Portifolios, Sites, ThreeSites } from "@/styles/pages/projetos";

import Image from "next/image";
import site1 from '../assets/projetos/instituto.jpg'
import site2 from '../assets/projetos/casamento.jpg'
import site3 from '../assets/projetos/ignite.jpg'
import site4 from '../assets/projetos/arc.jpg'


function porCima(obj: { style: { backgroundColor: string; }; }){
  obj.style.backgroundColor = "#00FF00"}

export default function Projetos() {
  return (
    <ContainerGlobal>
      <HabilidadesTitle>
        <h1>PROJETOS</h1>
        <p>Conheça meus projetos. Esses porjetos são todos pessoas, nenhum deles foram com fins lucrativos ou algo nesse sentido.</p>
      </HabilidadesTitle>
      <Portifolios>
        <ThreeSites>
          <Sites>
            <a href="#">
              <Image src={site1} layout="responsive" alt="israel"/>
              <NavBarSite onMouseOver={porCima}>
                <h5>06 de outubro de 1996</h5>
              </NavBarSite>
            </a>
          </Sites>
          <Sites>
            <Image src={site2} layout="responsive" alt="israel"/>
          </Sites>
          <Sites>
            <Image src={site3} layout="responsive" alt="israel"/>
          </Sites>
        </ThreeSites>
        <ThreeSites>
          <Sites>
            <Image src={site4} layout="responsive" alt="israel"/>
          </Sites>
          <Sites>
            <Image src={site1} layout="responsive" alt="israel"/>
          </Sites>
          <Sites>
            <Image src={site1} layout="responsive" alt="israel"/>
          </Sites>
        </ThreeSites>
      </Portifolios>
    </ContainerGlobal>
  )
}