import { motion } from "framer-motion"
import Waves from "./Waves"
import Clouds from "./Clouds"
import Mountains from "./Mountains"
import Sun from "./Sun"

export default function Hero() {
  return (
    <div className='h-screen w-screen bg-[#eaeaea] sticky top-0 -z-10'>
      <h4
        className={`text-xl text-stone-800 font-bold uppercase text-center py-3`}
      >
        Forma & Flow
      </h4>
      <Clouds />
      <Sun />
      <Mountains />
      <Waves />
      {/* <p className='text-center w-1/2'>
          Forma & Flow was born out of the belief that great design is a
          delicate dance between structure and creativity. We build digital
          experiences that are not just visually stunning but also intuitive and
          impactful. Our team thrives on turning complex ideas into designs that
          tell your story effortlessly.
        </p> */}
      <div className='flex flex-col items-center w-screen absolute bottom-10'>
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
