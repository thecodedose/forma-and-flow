import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const SERVICES = [
  {
    title: "Web Design",
    description: "https://tally.so/r/mYVJXq",
    link: "https://tally.so/r/mYVJXq",
  },
  {
    title: "Brand Identity",
    description: "",
    link: "https://tally.so/r/mYVJXq",
  },
  {
    title: "Content Creation",
    description: "",
    link: "https://tally.so/r/mYVJXq",
  },
]

export default function Services() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
  })

  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0vw", "-100vw", "-200vw"]
  )

  return (
    <div className='w-screen h-[400vh]' ref={containerRef}>
      <div className='sticky top-0'>
        <div className='flex justify-center items-center pt-20'>
          {"Services".split("").map((char, index) => (
            <div
              key={index}
              className='text-[150px] font-bold flex flex-col uppercase overflow-hidden'
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
        <motion.div
          style={{ x }}
          className='w-[300vw] h-screen flex sticky top-1/3'
        >
          {SERVICES.map(({ title, link }, index) => (
            <div
              key={index}
              className='w-screen h-[50vh] flex justify-center items-center'
            >
              <div className='bg-black border border-white rounded-xl h-96 w-[60vw]'>
                <h3 className='uppercase px-10 py-3 text-center font-bold text-5xl border-b border-white'>
                  {title}
                </h3>
                <div className='flex justify-center items-center h-full'>
                  <a
                    href={link}
                    className='inline-block m-3 px-10 py-3 text-center font-bold text-5xl bg-white text-black rounded-xl'
                  >
                    Enquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
