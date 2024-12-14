"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import Tagline from "./components/tagline"

export default function Home() {
  const containerRef = useRef(null)
  const skyRef = useRef(null)
  const sunRef = useRef(null)
  const cloudLeft1Ref = useRef(null)
  const cloudLeft2Ref = useRef(null)
  const cloudRightRef = useRef(null)
  const videoRef = useRef(null)
  const audioRef = useRef(null)

  useEffect(() => {
    let animationFrame
    let angle = 0

    const animateElements = () => {
      // Increment the angle for sinusoidal movement
      angle += 0.01

      // Calculate sinusoidal offsets
      const xOffset = Math.sin(angle) * 10 // Horizontal sway
      const yOffset = Math.cos(angle) * 5 // Vertical sway

      // Apply animations to elements
      const animateElement = (element, xMultiplier, yMultiplier) => {
        if (element.current) {
          element.current.style.transform = `translate(${
            xOffset * xMultiplier
          }px, ${yOffset * yMultiplier}px)`
        }
      }

      animateElement(sunRef, 0.8, 0.8)
      animateElement(cloudLeft1Ref, 1, 1)
      animateElement(cloudLeft2Ref, -0.9, 0.9)
      animateElement(cloudRightRef, 1, 1)

      // Schedule the next animation frame
      animationFrame = requestAnimationFrame(animateElements)
    }

    animateElements() // Start the animation
  }, [])

  let targetScale = 1
  let currentScale = 1

  const lerp = (start, end, t) => start + (end - start) * t

  useEffect(() => {
    let animationFrame

    const animateZoom = () => {
      // Gradually interpolate the current scale towards the target scale
      currentScale = lerp(currentScale, targetScale, 0.08)

      // Apply the interpolated scale to the container
      if (videoRef.current) {
        videoRef.current.style.transform = `scale(${currentScale})`
      }

      // Schedule the next animation frame
      animationFrame = requestAnimationFrame(animateZoom)
    }

    animateZoom() // Start the animation

    const handleMouseMove = (e) => {
      // if (audioRef.current) {
      //   audioRef.current.play()
      // }
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Calculate normalized mouse position (-0.5 to 0.5)
      const xPercent = clientX / innerWidth - 0.5
      const yPercent = clientY / innerHeight - 0.5

      // Calculate the target scale based on mouse position
      targetScale = 1 + Math.abs(xPercent + yPercent) * 0.1 // Zoom range: 1 to ~1.2
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
      }
      cancelAnimationFrame(animationFrame) // Stop animation when component unmounts
    }
  }, [])

  return (
    <>
      <div
        ref={containerRef}
        className='w-screen h-screen sticky top-0 font-[family-name:var(--font-geist-sans)] overflow-hidden'
      >
        <Image
          src='/hero/sky.png'
          alt='sky'
          width={1920}
          height={1080}
          className='w-screen h-screen absolute top-0 left-0 transition-transform ease-out'
          ref={skyRef}
        />
        <Image
          src='/hero/sun.png'
          alt='sun'
          width={1920}
          height={1080}
          className='w-screen h-screen absolute top-0 left-0 transition-transform ease-out'
          ref={sunRef}
        />

        <video
          autoPlay
          loop
          muted
          playsInline
          className='absolute top-0 left-0 w-screen h-screen object-cover'
          ref={videoRef}
        >
          <source src='/hero/waves.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <Image
          src='/hero/cloud-left-1.png'
          alt='cloud-left-1'
          width={1920}
          height={1080}
          className='w-screen h-screen absolute top-0 left-0 transition-transform ease-out'
          ref={cloudLeft1Ref}
        />
        <Image
          src='/hero/cloud-left-2.png'
          alt='cloud-left-2'
          width={1920}
          height={1080}
          className='w-screen h-screen absolute top-0 left-0 transition-transform ease-out'
          ref={cloudLeft2Ref}
        />
        <Image
          src='/hero/cloud-right.png'
          alt='cloud-right'
          width={1920}
          height={1080}
          className='w-screen h-screen absolute top-0 left-0 transition-transform ease-out'
          ref={cloudRightRef}
        />
        <h1 className='absolute top-3/4 left-1/2 transform -translate-x-1/2 text-7xl font-bold text-center'>
          FORMA & FLOW
        </h1>
      </div>
      <Tagline />
      <audio ref={audioRef} loop autoPlay className='hidden'>
        <source src='/hero/bg.mp3' type='audio/mp3' />
        Your browser does not support the audio tag.
      </audio>
    </>
  )
}
