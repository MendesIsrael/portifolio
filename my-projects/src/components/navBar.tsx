import { Menu, NavPages } from "@/styles/components/navBar";
import Link from "next/link";

export default function NavBar() {
  return (
    <Menu>
      <NavPages>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Projetos</Link>
        </li>
        <li>
          <Link href="/">Habilidades</Link>
        </li>
        <li>
          <Link href="/">Quem sou</Link>
        </li>
        <li>
          <Link href="/">Contato</Link>
        </li>
      </NavPages>
    </Menu>
  )
}