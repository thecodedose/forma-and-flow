import { useRef } from "react"
import { motion } from "framer-motion"

export default function Hero() {
  const sunRef = useRef()

  return (
    <div className='h-screen w-screen sticky top-0 -z-10'>
      <motion.div
        initial={{ transform: "translate(-50%, 0)", opacity: 0 }}
        animate={{ transform: "translate(-50%,-50%)", opacity: 1 }}
        transition={{ type: "spring", ease: "easeOut" }}
        ref={sunRef}
        className='w-40 h-40 border-2 border-white rounded-full absolute top-1/3 left-1/2'
      ></motion.div>
      <motion.div
        initial={{ transform: "translateY(100px)" }}
        animate={{ transform: "translateY(0px)" }}
        transition={{ type: "spring", ease: "easeOut", delay: 0.2 }}
        className='flex justify-center items-center h-[70vh] bg-black border-t-2 border-white w-screen absolute top-1/3'
      >
        <p className='text-center w-1/2'>
          Forma & Flow was born out of the belief that great design is a
          delicate dance between structure and creativity. We build digital
          experiences that are not just visually stunning but also intuitive and
          impactful. Our team thrives on turning complex ideas into designs that
          tell your story effortlessly.
        </p>
      </motion.div>
      <div className='flex flex-col items-center w-screen absolute bottom-20 text-white h-12'>
        <span className='uppercase'>Scroll</span>
        <motion.div
          initial={{ height: "0px" }}
          animate={{ height: "20px" }}
          transition={{ type: "spring" }}
          className='w-[1px] h-8 bg-white'
        ></motion.div>
      </div>
    </div>
  )
}
