import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { NavBar } from "../components/NavBar"
import { useSpring, animated } from "react-spring"
import { useState, useRef } from "react"

const Home: NextPage = () => {
  const [dark, setDark] = useState(false)

  const toggleTheme = () => {
    document.querySelector("body")?.classList.toggle("dark")
    setDark((prev) => !prev)
  }

  const springStyle = useSpring({
    rotateZ: dark ? 180 : 0,
  })

  return (
    <>
      <Head>
        <title>Portfolia - Jack Chan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="color-scheme" content="dark light"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <NavBar dark={dark} toggleTheme={toggleTheme} />
        <main className={styles.main}>
          <animated.div
            style={{
              // backgroundColor: "black",
              ...springStyle,
            }}
          >
            <div
              className={`${styles.imageContainer} ${styles.sun}`}
              onClick={toggleTheme}
            >
              <Image
                src="/sun.svg"
                layout="responsive"
                width={1000}
                height={1000}
                objectFit="contain"
              />
            </div>
            <div
              className={`${styles.imageContainer} ${styles.moon}`}
              onClick={toggleTheme}
            >
              <Image
                src="/full_moon.svg"
                layout="responsive"
                width={1000}
                height={1000}
                objectFit="contain"
              />
            </div>
          </animated.div>
        </main>
      </div>
    </>
  )
}

export default Home
