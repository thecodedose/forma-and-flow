"use client"
import { useRef, useEffect } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero/Hero"
import Products from "./components/Products"
import Services from "./components/Services"
import Tagline from "./components/Tagline"
import Lenis from "@studio-freight/lenis"
import Footer from "./components/Footer"

export default function Home() {
  const lenisRef = useRef(null)

  useEffect(() => {
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        lerp: 0.1,
        smooth: true,
        direction: "vertical",
      })

      const handleScroll = () => {
        lenisRef.current.raf()
      }

      requestAnimationFrame(handleScroll)
    }

    return () => {
      lenisRef.current.destroy()
    }
  }, [])

  return (
    <div ref={lenisRef}>
      <div>
        <Header />
        <Hero />
        <Tagline />
      </div>
      <Services />
      <Products />
      <Footer />
    </div>
  )
}
