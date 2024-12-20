import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

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
      className='w-screen h-[300vh] bg-gradient-to-b from-stone-950 to-stone-800 rounded-3xl relative py-[25vh]'
    >
      <div className='w-screen h-screen sticky top-0 flex justify-center items-center'>
        <motion.h2
          style={{ scale: scale }}
          className='text-8xl font-bold text-stone-400 flex flex-col absolute'
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
                    className={`h-[1px] ${width[index]} bg-stone-400 -translate-y-3 transition-all`}
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
