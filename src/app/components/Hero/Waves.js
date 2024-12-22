import { motion } from "framer-motion"
import Image from "next/image"

export default function Waves() {
  const generateWaves = () => {
    const waves = []
    let top = 2
    for (let i = 0; i < 6; i++) {
      waves.push(
        <motion.div
          key={i}
          initial={{ y: "0px" }}
          animate={{ y: top + "px" }}
          transition={{
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1 + Math.random(),
          }}
          className={`h-[1px] bg-white w-screen absolute`}
          style={{
            top: top + "vh",
          }}
        ></motion.div>
      )
      top *= 2
    }

    return waves
  }
  return (
    <motion.div
      initial={{ transform: "translateY(100px)" }}
      animate={{ transform: "translateY(0px)" }}
      transition={{ type: "spring", ease: "easeOut", delay: 0.2 }}
      className='flex justify-center items-center h-[100vh] bg-gradient-to-b from-[#000b1e] via-[#21466b] to-[#385f70] border-t-2 border-white w-screen absolute top-[50vh]'
    >
      <div
        width={100}
        height={100}
        className='w-full h-full bg-[url("/noise.png")] opacity-20 bg-repeat-round'
      ></div>
      {generateWaves()}
    </motion.div>
  )
}
