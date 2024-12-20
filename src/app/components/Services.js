import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const SERVICES = [
  {
    title: "Web Design",
    description:
      "Crafting visually compelling and responsive websites that captivate and convert.",
    link: "https://tally.so/r/mYVJXq",
  },
  {
    title: "Brand Identity",
    description:
      "Building cohesive and memorable brand experiences that resonate.",
    link: "https://tally.so/r/mYVJXq",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing user-centric interfaces that make navigation a breeze.",
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
    <div className='bg-stone-900 w-screen h-[400vh]' ref={containerRef}>
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

        <div className='w-screen overflow-hidden'>
          <motion.div
            style={{ x }}
            className='w-[300vw] h-screen flex sticky top-1/3'
          >
            {SERVICES.map(({ title, link, description }, index) => (
              <div
                key={index}
                className='w-screen h-[50vh] flex justify-center items-center'
              >
                <div className='bg-gradient-to-r from-stone-800 to-stone-600 rounded-xl h-96 w-1/2 flex flex-col justify-between items-center'>
                  <h3 className='text-stone-700 uppercase px-10 py-3 text-center font-bold text-5xl bg-stone-400 rounded-t-xl w-full'>
                    {title}
                  </h3>
                  <p>{description}</p>
                  <a
                    href={link}
                    className='uppercase inline-block m-3 px-10 py-3 text-center font-bold text-3xl bg-stone-900 text-stone-200 rounded-xl'
                  >
                    Enquire
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
