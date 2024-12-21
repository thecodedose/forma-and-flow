import { motion } from "framer-motion"

export default function Mountains() {
  return (
    <div>
      <div className='flex w-full absolute bottom-[30vh] left-0'>
        <div
          className='bg-stone-500 w-1/4 h-[40vh]'
          style={{ clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)" }}
        ></div>
        <div
          className='bg-gradient-to-br from-stone-800 to-stone-500 w-1/4 h-[40vh]'
          style={{ clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)" }}
        ></div>
        <div
          initial={{ y: "10%" }}
          whileInView={{ y: "0" }}
          transition={{
            type: "spring",
            ease: "easeInOut",
            duration: 1,
          }}
          className='bg-stone-500 w-1/4 h-[40vh]'
          style={{ clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)" }}
        ></div>
        <div
          initial={{ y: "10%" }}
          whileInView={{ y: "0" }}
          transition={{
            type: "spring",
            ease: "easeInOut",
            duration: 1,
          }}
          className='bg-gradient-to-b from-stone-800 to-stone-500 w-1/4 h-[40vh]'
          style={{ clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)" }}
        ></div>
      </div>
      <div className='absolute w-full left-0 bottom-0 h-[30vh] bg-stone-500'></div>
      <motion.div
        initial={{ y: "20%" }}
        whileInView={{ y: "0" }}
        transition={{
          type: "spring",
          ease: "easeInOut",
          duration: 1.5,
          delay: 0.5,
        }}
        className='absolute bottom-[10vh] flex w-full left-0'
      >
        <div
          className='bg-stone-400 w-1/2 h-[50vh]'
          style={{ clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)" }}
        ></div>
        <div
          className='bg-gradient-to-br from-stone-700 to-stone-400 w-1/2 h-[50vh]'
          style={{ clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)" }}
        ></div>
      </motion.div>
      <div className='flex w-fit absolute bottom-[10vh] left-0'>
        <div
          className='bg-stone-200 w-[30vw] h-[40vh]'
          style={{ clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)" }}
        ></div>
        <div
          className='bg-gradient-to-br from-stone-400 to-stone-200 w-[30vw] h-[40vh]'
          style={{ clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)" }}
        ></div>
      </div>
      <div className='flex w-fit absolute bottom-[10vh] right-0'>
        <div
          className='bg-stone-200 w-[30vw] h-[40vh]'
          style={{ clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)" }}
        ></div>
        <div
          className='bg-gradient-to-b from-stone-400 to-stone-300 w-[30vw] h-[40vh]'
          style={{ clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)" }}
        ></div>
      </div>
      <div className='absolute w-1/2 left-0 bottom-0 h-[10vh] bg-stone-200'></div>
      <div className='absolute w-1/2 right-0 bottom-0 h-[10vh] bg-stone-300'></div>
      <motion.div
        initial={{ y: "10%" }}
        whileInView={{ y: "0" }}
        transition={{
          type: "spring",
          ease: "easeInOut",
          duration: 1.5,
        }}
        className='flex w-fit absolute bottom-0 left-0'
      >
        <div
          className='bg-stone-500 w-[40vw] h-[40vh]'
          style={{ clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)" }}
        ></div>
        <div
          className='bg-gradient-to-br from-stone-800 to-stone-500 w-[40vw] h-[40vh]'
          style={{ clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)" }}
        ></div>
      </motion.div>
      <motion.div
        initial={{ y: "20%" }}
        whileInView={{ y: "0" }}
        transition={{
          type: "spring",
          ease: "easeInOut",
          duration: 1,
          delay: 0.5,
        }}
        className='flex w-fit absolute bottom-0 right-0'
      >
        <div
          className='bg-stone-400 w-[35vw] h-[35vh]'
          style={{ clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)" }}
        ></div>
        <div
          className='bg-gradient-to-br from-stone-700 to-stone-400 w-[35vw] h-[35vh]'
          style={{ clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)" }}
        ></div>
      </motion.div>
      <motion.div
        initial={{ y: "20%" }}
        whileInView={{ y: "0" }}
        transition={{
          type: "spring",
          ease: "easeInOut",
          duration: 2,
          delay: 0.6,
        }}
        className='flex w-fit absolute bottom-0 left-[10vw]'
      >
        <div
          className='bg-stone-400 w-[20vw] h-[20vh]'
          style={{ clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)" }}
        ></div>
        <div
          className='bg-gradient-to-br from-stone-700 to-stone-400 w-[20vw] h-[20vh]'
          style={{ clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)" }}
        ></div>
      </motion.div>
    </div>
  )
}
