import { ContainerGlobal } from "@/styles/pages/habilidades";
import Image from "next/image";

import whatsapp from '../assets/contato/whatsapp.png'



export default function Contato() {
  return (
    <ContainerGlobal>
      <h1>oi</h1>
      <p>Entre em contato comigo, estou esperando sua mensagem. Você pode me enviar um e-mail, me ligar ou enviar um mensagem pelas rede sociais.</p>

      <Image src={whatsapp} layout="responsive" alt="israel"/>
    </ContainerGlobal>  )
}