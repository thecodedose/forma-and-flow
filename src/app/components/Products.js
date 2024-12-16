import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const projects = [
  {
    color: "#BBACAF",
  },
  {
    color: "#977F6D",
  },
  {
    color: "#C2491D",
  },
  {
    color: "#B62429",
  },
  {
    color: "#88A28D",
  },
]

const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div
      ref={container}
      className='w-screen h-screen flex justify-center items-center sticky top-0'
    >
      <motion.div
        className='relative h-1/2 w-1/2'
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      ></motion.div>
    </div>
  )
}

export default function Products() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })
  return (
    <div
      ref={containerRef}
      className={`w-screen relative bg-white rounded-xl`}
    >
      <div className='flex h-screen justify-center sticky top-0'>
        {"Products".split("").map((char, index) => (
          <div
            key={index}
            className='text-[150px] text-black font-bold flex flex-col uppercase overflow-hidden'
          >
            <motion.span
              key={index}
              initial={{ transform: "translateY(100%)" }}
              whileInView={{ transform: "translateY(0%)" }}
              transition={{
                duration: 1,
                delay: 0.1 * index,
                type: "spring",
              }}
            >
              {char}
            </motion.span>
          </div>
        ))}
      </div>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        )
      })}
    </div>
  )
}
