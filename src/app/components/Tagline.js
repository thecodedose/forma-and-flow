import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Tagline() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 2])
  return (
    <div
      ref={containerRef}
      className='w-screen h-[300vh] bg-white rounded-3xl py-[25vh] relative'
    >
      <div className='w-screen h-screen sticky top-0 flex justify-center items-center'>
        <motion.h2
          style={{ scale: scale }}
          className='text-8xl font-bold text-black flex flex-col absolute'
        >
          <span className='uppercase'>Shaping</span>
          <span className='uppercase'>design,</span>
          <span className='uppercase'>building</span>
          <span className='uppercase'>experiences</span>
        </motion.h2>
      </div>
    </div>
  )
}
