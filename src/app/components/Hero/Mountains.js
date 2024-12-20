import { motion } from "framer-motion"

export default function Mountains() {
  return (
    <>
      <motion.div
        initial={{ transform: "translate(0, 0)", opacity: 0 }}
        animate={{ transform: "translate(0,-50%)", opacity: 1 }}
        transition={{ ease: "easeOut", delay: 0.5 }}
        style={{
          clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
        }}
        className='w-[20vw] h-[50vh] absolute top-[30vh] left-0 bg-white'
      ></motion.div>
      <motion.div
        initial={{ transform: "translate(0, 0)", opacity: 0 }}
        animate={{ transform: "translate(0,-50%)", opacity: 1 }}
        transition={{ ease: "easeOut", delay: 0.5 }}
        style={{
          clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)",
        }}
        className='w-[20vw] h-[50vh] absolute top-[30vh] right-0 bg-white'
      ></motion.div>
    </>
  )
}
