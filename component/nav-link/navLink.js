"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";

function NavLink({ href, label }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`${path.startsWith(href) ? styles.active : undefined} ${
        styles.link
      }`}
    >
      {label}
    </Link>
  );
}

export default NavLink;
