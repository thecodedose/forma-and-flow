import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Bubbles from "./Bubbles"

export default function Tagline() {
  const containerRef = useRef(null)
  const [width, setWidth] = useState(["w-0", "w-0", "w-0", "w-0"])

  const { scrollYProgress } = useScroll({
    target: containerRef,
  })

  const updateWidth = (index, value) => {
    const newWidths = ["w-0", "w-0", "w-0", "w-0"]
    newWidths[index] = value
    setWidth(newWidths)
  }

  const scale = useTransform(scrollYProgress, [0, 1], [1, 2])
  return (
    <div
      ref={containerRef}
      className='w-screen h-[300vh] bg-stone-950 relative py-[25vh]'
    >
      <div
        width={100}
        height={100}
        className='absolute top-0 w-full h-full bg-[url("/noise.png")] opacity-40'
      ></div>
      <Bubbles />
      <div className='w-screen h-screen sticky top-0 flex justify-center items-center'>
        <motion.h2
          style={{ scale: scale }}
          className='text-8xl  text-stone-200 flex flex-col absolute'
        >
          {["Shaping", "design,", "building", "experiences"].map(
            (word, index) => {
              return (
                <div
                  key={index}
                  onMouseEnter={() => updateWidth(index, "w-full")}
                  onMouseLeave={() => updateWidth(index, "w-0")}
                  className='flex flex-col w-fit justify-center items-center'
                >
                  <span className='uppercase'>{word}</span>
                  <div
                    className={`h-[1px] ${width[index]} bg-stone-200 -translate-y-3 transition-all`}
                  ></div>
                </div>
              )
            }
          )}
        </motion.h2>
      </div>
    </div>
  )
}
