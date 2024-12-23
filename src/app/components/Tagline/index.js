import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Bubbles from "./Bubbles"
import Flip from "../Text/Flip"

export default function Tagline() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 2])
  const scaleBubble = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  return (
    <div
      ref={containerRef}
      className='w-screen h-[200vh] lg:h-[300vh] bg-gradient-to-b from-[#385f70] via-[#1f2d57] to-[#000b1e] relative lg:py-[25vh]'
    >
      <div
        width={100}
        height={100}
        className='absolute top-0 w-full h-full bg-[url("/noise.png")] opacity-20'
      ></div>
      <Bubbles scale={scaleBubble} />
      <div className='w-screen h-screen sticky top-0 flex justify-center items-center'>
        <motion.h2
          style={{ scale: scale }}
          className='text-5xl lg:text-8xl text-stone-200 flex flex-col absolute'
        >
          {["Shaping", "design,", "building", "experiences"].map(
            (word, index) => {
              return (
                <Flip
                  key={index}
                  text1={word}
                  text2={word}
                  lineHeight={"h-[2.5rem] lg:h-[6rem]"}
                />
              )
            }
          )}
        </motion.h2>
      </div>
    </div>
  )
}
