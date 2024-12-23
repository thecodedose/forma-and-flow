import { motion } from "framer-motion"

export default function Mountains() {
  return (
    <div className='pointer-events-none'>
      <div className='flex w-full absolute bottom-[30vh] left-0'>
        <div
          className='bg-stone-500 bg-[url("/noise.png")] bg-repeat-round bg-blend-multiply w-1/4 h-[30vh]'
          style={{
            clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)",
          }}
        ></div>
        <div
          className='bg-gradient-to-br from-stone-800 to-stone-500 w-1/4 h-[30vh]'
          style={{ clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)" }}
        ></div>
        <div
          className='bg-[#7e9494] w-1/4 h-[30vh] bg-[url("/noise.png")] bg-repeat-round bg-blend-multiply'
          style={{ clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)" }}
        ></div>
        <div
          className='bg-repeat-round bg-blend-multiply to-[#7e9494] w-1/4 h-[30vh]'
          style={{
            clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
            background: "url('/noise.png'), linear-gradient(#3d4c52, #7e9494)",
            backgroundRepeat: "round",
          }}
        ></div>
      </div>
      <div className='absolute left-0 bottom-0 h-[30vh] bg-stone-500 w-1/2 bg-[url("/noise.png")] bg-repeat-round bg-blend-multiply'></div>
      <div className='absolute right-0 bottom-0 h-[30vh] bg-[#7e9494] w-1/2 bg-[url("/noise.png")] bg-repeat-round bg-blend-multiply'></div>
      <motion.div
        initial={{ y: "20%" }}
        whileInView={{ y: "0" }}
        transition={{
          type: "spring",
          ease: "easeInOut",
          duration: 1.5,
          delay: 0.3,
        }}
        className='absolute bottom-[10vh] flex w-full left-0'
      >
        <div
          className='bg-[#7e9494] w-1/2 h-[50vh] bg-[url("/noise.png")] bg-repeat-round bg-blend-multiply'
          style={{ clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)" }}
        ></div>
        <div
          className='w-1/2 h-[50vh] bg-blend-multiply bg-repeat-round'
          style={{
            clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
            background: "url('/noise.png'), linear-gradient(#3d4c52, #7e9494)",
            backgroundRepeat: "round",
          }}
        ></div>
      </motion.div>
      <div className='flex w-fit absolute bottom-[10vh] left-0'>
        <div
          className='bg-[#dbceb8] w-[30vw] h-[30vh] bg-[url("/noise.png")] bg-repeat-round bg-blend-multiply'
          style={{ clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)" }}
        ></div>
        <div
          className='bg-gradient-to-br from-stone-400 to-stone-200 w-[30vw] h-[30vh]'
          style={{
            clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
            background: "url('/noise.png'), linear-gradient(#bdb19b, #dbceb8)",
            backgroundRepeat: "round",
          }}
        ></div>
      </div>
      <div className='flex w-fit absolute bottom-[10vh] right-0'>
        <div
          className='bg-[#efe9db] w-[30vw] h-[30vh] bg-[url("/noise.png")] bg-repeat-round bg-blend-multiply'
          style={{ clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)" }}
        ></div>
        <div
          className='bg-gradient-to-b from-stone-400 to-stone-300 w-[30vw] h-[30vh]'
          style={{
            clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
            background: "url('/noise.png'), linear-gradient(#b8ab91, #efe9db)",
            backgroundRepeat: "round",
          }}
        ></div>
      </div>
      <div className='absolute w-1/2 left-0 bottom-0 h-[10vh] bg-[#dbceb8] bg-[url("/noise.png")] bg-repeat-round bg-blend-multiply'></div>
      <div className='absolute w-1/2 right-0 bottom-0 h-[10vh] bg-[#efe9db] bg-[url("/noise.png")] bg-repeat-round bg-blend-multiply'></div>
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
          className='bg-[#808277] w-[40vw] h-[30vh] bg-[url("/noise.png")] bg-repeat-round bg-blend-multiply'
          style={{ clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)" }}
        ></div>
        <div
          className='w-[40vw] h-[30vh] bg-blend-multiply'
          style={{
            clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
            background: "url('/noise.png'), linear-gradient(#444843, #808277)",
            backgroundRepeat: "round",
          }}
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
          className='bg-[#9da9a5] w-[35vw] h-[35vh] bg-[url("/noise.png")] bg-repeat-round bg-blend-multiply'
          style={{ clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)" }}
        ></div>
        <div
          className='w-[35vw] h-[35vh]'
          style={{
            clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
            background: "url('/noise.png'), linear-gradient(#788985, #9da9a5)",
            backgroundRepeat: "round",
          }}
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
          className='bg-[#c0baa4] w-[20vw] h-[20vh] bg-[url("/noise.png")] bg-repeat-round bg-blend-multiply'
          style={{ clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)" }}
        ></div>
        <div
          className='w-[20vw] h-[20vh]'
          style={{
            clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
            background: "url('/noise.png'), linear-gradient(#aba28b, #c0baa4)",
            backgroundRepeat: "round",
          }}
        ></div>
      </motion.div>
    </div>
  )
}
