import Link from "next/link";
import styles from "./header.module.css";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import NavLink from "./nav-link/navLink";
import GradientLayout from "./GradientLayout";

function Header() {
  return (
    <>
      <GradientLayout />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image
            priority
            src={logoImg}
            className="img-fluid rounded-top"
            alt="A plate with food on it"
          />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals" label="Browse Meals" />
            </li>
            <li>
              <NavLink href="/community" label="Foodies Community" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
