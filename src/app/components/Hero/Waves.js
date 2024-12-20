import { motion } from "framer-motion"
import Image from "next/image"

export default function Waves() {
  return (
    <motion.div
      initial={{ transform: "translateY(100px)" }}
      animate={{ transform: "translateY(0px)" }}
      transition={{ type: "spring", ease: "easeOut", delay: 0.2 }}
      className='flex justify-center items-center h-[50vh] bg-stone-900 border-t-2 border-white w-screen absolute top-1/2'
    >
      <div
        width={100}
        height={100}
        className='w-full h-full bg-[url("/noise.png")] opacity-40'
      ></div>
      <motion.div
        initial={{ transform: "translateY(0px)" }}
        animate={{ transform: "translateY(2px)" }}
        transition={{
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
        }}
        className={`h-[1px] bg-white w-screen absolute top-[2%]`}
      ></motion.div>
      <motion.div
        initial={{ transform: "translateY(0px)" }}
        animate={{ transform: "translateY(4px)" }}
        transition={{
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.1,
        }}
        className={`h-[1px] bg-white w-screen absolute top-[4%]`}
      ></motion.div>
      <motion.div
        initial={{ transform: "translateY(0px)" }}
        animate={{ transform: "translateY(8px)" }}
        transition={{
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.1,
        }}
        className={`h-[1px] bg-white w-screen absolute top-[8%]`}
      ></motion.div>
      <motion.div
        initial={{ transform: "translateY(0px)" }}
        animate={{ transform: "translateY(16px)" }}
        transition={{
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
        }}
        className={`h-[1px] bg-white w-screen absolute top-[16%]`}
      ></motion.div>
      <motion.div
        initial={{ transform: "translateY(0px)" }}
        animate={{ transform: "translateY(32px)" }}
        transition={{
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.1,
        }}
        className={`h-[1px] bg-white w-screen absolute top-[32%]`}
      ></motion.div>
      <motion.div
        initial={{ transform: "translateY(0px)" }}
        animate={{ transform: "translateY(32px)" }}
        transition={{
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
        }}
        className={`h-[1px] bg-white w-screen absolute top-[64%]`}
      ></motion.div>
    </motion.div>
  )
}
