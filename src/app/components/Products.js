import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const projects = [
  {
    title: "Bentofolio Portfolio Template",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet ex eget urna tincidunt viverra. Nullam fringilla, libero eget venenatis vehicula, urna nunc gravida orci, a pharetra libero erat vel risus. Vivamus euismod tincidunt nibh, ac sodales urna venenatis a. Suspendisse potenti.",
    img: "/bentofolio.png",
    purchaseUrl: "https://tally.so/r/mBAaPY",
  },
  {
    title: "Gastby Starter Peach Blog Template",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet ex eget urna tincidunt viverra. Nullam fringilla, libero eget venenatis vehicula, urna nunc gravida orci, a pharetra libero erat vel risus. Vivamus euismod tincidunt nibh, ac sodales urna venenatis a. Suspendisse potenti.",
    img: "https://thecodedose.com/assets/confident-ritchie-123a6d.netlify_2.png",
    purchaseUrl: "https://tally.so/r/mBAaPY",
  },
  {
    title: "Portfolio Template",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet ex eget urna tincidunt viverra. Nullam fringilla, libero eget venenatis vehicula, urna nunc gravida orci, a pharetra libero erat vel risus. Vivamus euismod tincidunt nibh, ac sodales urna venenatis a. Suspendisse potenti.",
    img: "https://thecodedose.com/assets/confident-ritchie-123a6d.netlify_2.png",
    purchaseUrl: "https://tally.so/r/mBAaPY",
  },
]

const Card = ({
  i,
  title,
  description,
  img,
  url,
  color,
  purchaseUrl,
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
      className='w-screen h-screen pointer-events-none flex justify-center items-center sticky top-0'
    >
      <motion.div
        className='relative h-2/3 w-full rounded-xl px-5'
        style={{
          scale,
          top: `calc(5vh + ${i * 30}px)`,
        }}
      >
        <div className='-translate-y-20 lg:translate-y-0 lg:grid grid-cols-3 lg:h-full shadow-[0_0px_50px_-15px_#354340] rounded-xl'>
          <div className='flex flex-col justify-between text-stone-900 bg-stone-100 rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl h-full'>
            <h2 className='px-10 py-5 lg:p-10 uppercase text-4xl font-bold lg:text-8xl'>
              {title}
            </h2>
          </div>
          <div className='h-64 lg:h-full w-full overflow-hidden'>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
              }}
              className='h-full'
            ></motion.div>
          </div>
          <div className='flex flex-col justify-between rounded-b-xl lg:rounded-r-xl bg-stone-100 text-stone-900 uppercase font-bold'>
            <p className='p-10'>{description}</p>
            <div className='w-full px-10 py-5 bg-stone-900 rounded-bl-xl lg:rounded-bl-none rounded-br-xl cursor-pointer relative'>
              <a
                href={purchaseUrl}
                className='uppercase text-3xl text-stone-200 z-30 pointer-events-auto'
              >
                BUY NOW
              </a>
            </div>
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
        background:
          "url('/noise.png'), linear-gradient(#000b1e, #f5f5f4, #9fb1ad)",
        backgroundRepeat: "round",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className='flex justify-center sticky top-0'>
        {"Products".split("").map((char, index) => (
          <div
            key={index}
            className='text-5xl lg:text-[150px] text-white font-bold flex flex-col uppercase overflow-hidden'
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
