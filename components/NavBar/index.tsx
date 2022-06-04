import React, { FC, useState } from "react"
import {
  CodeIcon,
  DarkIcon,
  HomeIcon,
  InfoIcon,
  LightIcon,
  MailIcon,
} from "../Icons"
import styles from "./styles.module.css"

export const NavBar: FC<{
  dark: boolean
  toggleTheme: () => void
}> = ({ dark, toggleTheme }) => {
  return (
    <nav className={styles.nav}>
      <li className={styles.active}>
        <HomeIcon className={styles.icon} />
        <div>Home</div>
      </li>
      <li>
        <InfoIcon className={styles.icon} />
        <div>About</div>
      </li>
      <li>
        <CodeIcon className={styles.icon} />
        <div>Skills</div>
      </li>
      <li>
        <MailIcon className={styles.icon} />
        <div>Contact</div>
      </li>
      <li onClick={toggleTheme}>
        <LightIcon display={dark ? "none" : "solid"} className={styles.icon} />
        <DarkIcon display={dark ? "solid" : "none"} className={styles.icon} />
      </li>
    </nav>
  )
}
