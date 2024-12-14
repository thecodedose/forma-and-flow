import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Tagline() {
  const ref = useRef(null)
  const { scrollY, scrollYProgress } = useScroll({
    target: ref, // (Optional) Track scrolling of a specific container
    offset: ["start end", "end start"], // (Optional) Define when animation starts/ends
  })

  const yTransform = useTransform(scrollYProgress, [0, 0.5], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.5], [0, 1, 0])

  const yTransform2 = useTransform(scrollYProgress, [0.5, 1], [100, -100])
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.75, 1], [0, 1, 0])

  return (
    <div className='w-screen h-[580vh] mt-20 sticky top-0 z-10'>
      <div className='w-screen h-screen sticky top-0 bg-[rgb(85,113,153)]'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='absolute top-0 left-0 w-screen -translate-y-full'
        >
          <source src='/waves/wave1.mov' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='w-screen h-[90vh] sticky top-10 bg-blue-300'></div>
      <div
        ref={ref}
        className='text-7xl w-screen h-[400vh] sticky top-20 bg-blue-200 '
      >
        <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center'>
          {["Shaping", "Designs,", "Guiding", "Experiences"].map(
            (word, index) => (
              <motion.span
                key={index}
                className='text-white'
                style={{ opacity }}
              >
                {word}
              </motion.span>
            )
          )}
        </div>
        <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center'>
          <motion.span className='text-white' style={{ opacity: opacity2 }}>
            Our Services
          </motion.span>
        </div>
      </div>
    </div>
  )
}
