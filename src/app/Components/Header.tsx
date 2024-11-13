

"use client";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import styles from "./Header.module.css";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`header ${isOpen ? "open" : ""}`}>
      <div className="logo">
        <span>A</span>SMA
      </div>
      <ul className={`navlist ${isOpen ? "open" : ""}`}>
        <li>
          <Link href="/" className={styles.navLink} onClick={closeMenu}>
          Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.navLink} onClick={closeMenu}> 
          About
          </Link>
        </li>
        
        <li>
          <Link href="/skills" className={styles.navLink} onClick={closeMenu}>
           Skills
           </Link>
        </li>
        
        <li>
          <Link href="/contact" className={styles.navLink} onClick={closeMenu}>
          Contact
          </Link>
        </li>
      </ul>
      <div id="menu-icon" onClick={toggleMenu}>
        <MdMenu />
      </div>
    </header>
  );
}

export default Header;