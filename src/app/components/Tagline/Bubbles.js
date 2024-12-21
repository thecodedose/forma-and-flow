import { motion, useAnimationFrame } from "framer-motion"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

function Bubble({ width, height, top, left, bottom, right }) {
  return (
    <motion.div
      initial={{ x: "0", y: "0" }}
      animate={{
        x: Math.abs(Math.random() * 20) + "px",
        y: Math.abs(Math.random() * 20) + "px",
      }}
      transition={{
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
      }}
      className={`${width} ${height} ${top} ${bottom} ${left} ${right} overflow-hidden rounded-full absolute bg-gradient-to-br from-black via-stone-800 to-stone-500`}
    >
      <div
        width={100}
        height={100}
        alt=''
        className='w-full h-full bg-[url("/noise.png")] bg-opacity-10'
      />
    </motion.div>
  )
}

export default function Bubbles() {
  const bubbles = [
    { width: "w-[15vw]", height: "h-[15vw]", top: "top-1/4", left: "left-32" },
    { width: "w-[25vw]", height: "h-[25vw]", top: "top-1/8", left: "left-1/2" },
    { width: "w-[30vw]", height: "h-[30vw]", top: "top-2/3", left: "left-16" },
    { width: "w-[35vw]", height: "h-[35vw]", top: "top-1/3", left: "right-[8vw]" },
  ]

  const generateBubbles = () => {
    return bubbles.map((bubble, index) => <Bubble {...bubble} key={index} />)
  }
  return (
    <div className='top-0 w-full h-screen sticky top-0'>
      {generateBubbles()}
    </div>
  )
}
