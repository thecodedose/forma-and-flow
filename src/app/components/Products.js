import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const projects = [
  {
    title: "Portfolio Template",
    description:
      "Lorem dorem ipsum sit dolor. Lorem dorem ipsum sit dolor.Lorem dorem ipsum sit dolor.",
    color: "#BBACAF",
    img: "https://thecodedose.com/assets/confident-ritchie-123a6d.netlify_2.png",
  },
  {
    title: "Portfolio Template",
    color: "#977F6D",
    img: "https://thecodedose.com/assets/confident-ritchie-123a6d.netlify_2.png",
  },
  {
    title: "Portfolio Template",
    color: "#C2491D",
    img: "https://thecodedose.com/assets/confident-ritchie-123a6d.netlify_2.png",
  },
]

const Card = ({
  i,
  title,
  description,
  img,
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

  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div
      ref={container}
      className='w-screen h-screen flex justify-center items-center sticky top-0'
    >
      <motion.div
        className='relative h-2/3 w-full rounded-xl px-5'
        style={{
          scale,
          top: `calc(5vh + ${i * 30}px)`,
        }}
      >
        <div className='-translate-y-20 lg:translate-y-0 lg:grid grid-cols-3 lg:h-full shadow-[0_0px_50px_-15px_#354340] rounded-xl'>
          <div className='flex flex-col justify-between text-stone-900 bg-stone-100 rounded-t-xl lg:rounded-l-xl h-full'>
            <h2 className='p-10 uppercase text-3xl lg:text-8xl'>{title}</h2>
            <div className='w-full px-10 py-5 bg-stone-900 lg:rounded-bl-xl cursor-pointer'>
              <a className='uppercase text-3xl text-stone-200'>Explore</a>
            </div>
          </div>
          <div className='h-64 lg:h-full w-full overflow-hidden'>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ backgroundImage: `url(${img})` }}
              className='h-full'
            ></motion.div>
          </div>
          <div className='p-10 rounded-b-xl lg:rounded-r-xl bg-stone-100 text-stone-900 uppercase font-bold'>
            <p>{description}</p>
          </div>
        </div>
      </motion.div>
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
      id='products'
      ref={containerRef}
      className={`w-screen relative rounded-t-3xl py-10 lg:py-20`}
      style={{
        background: "url('/noise.png'), linear-gradient(#f5f5f4, #9fb1ad)",
        backgroundRepeat: "round",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className='flex h-screen justify-center sticky top-0'>
        {"Products".split("").map((char, index) => (
          <div
            key={index}
            className='text-5xl lg:text-[150px] text-stone-800 font-bold flex flex-col uppercase overflow-hidden'
          >
            <motion.span
              key={index}
              initial={{ transform: "translateY(50%)" }}
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
