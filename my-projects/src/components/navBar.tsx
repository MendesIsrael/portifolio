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
          <Link href="/projetos">Projetos</Link>
        </li>
        <li>
          <Link href="/habilidades">Habilidades</Link>
        </li>
        <li>
          <Link href="quemsou/">Quem sou</Link>
        </li>
        <li>
          <Link href="contato/">Contato</Link>
        </li>
      </NavPages>
    </Menu>
  )
}