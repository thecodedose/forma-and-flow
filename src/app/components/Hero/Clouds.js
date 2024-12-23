import { motion } from "framer-motion"

export default function Clouds() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.div
        initial={{ transform: "translateX(0px)" }}
        animate={{ transform: "translateX(10px)" }}
        transition={{
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
        }}
        className='w-32 h-6 lg:w-60 lg:h-16 bg-white rounded-full absolute top-[30vh] left-1/4 lg:left-1/3'
      ></motion.div>
      <motion.div
        initial={{ transform: "translate(-40px, -80px)" }}
        animate={{ transform: "translate(-60px, -80px)" }}
        transition={{
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
        }}
        className='w-24 h-4 lg:w-56 lg:h-8 bg-white rounded-full absolute top-[32vh] lg:top-[30vh] left-1/3'
      ></motion.div>
      <motion.div
        initial={{ transform: "translate(0, -100%)" }}
        animate={{ transform: "translate(10px, -100%)" }}
        transition={{
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
        }}
        className='w-32 h-6 lg:w-60 lg:h-10 bg-white rounded-full absolute top-[30vh] left-1/2 -translate-y-full'
      ></motion.div>
    </motion.div>
  )
}
