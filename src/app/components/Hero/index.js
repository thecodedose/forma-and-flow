import { motion } from "framer-motion"
import Waves from "./Waves"
import Clouds from "./Clouds"
import Mountains from "./Mountains"
import Sun from "./Sun"
import Underline from "../Text/Underline"

export default function Hero() {
  return (
    <div className='h-[150vh] w-screen bg-[#eaeaea] relative'>
      <div className='sticky top-0 grid grid-cols-3 py-3'>
        <div>
          <span
            className={`text-xl text-stone-800 uppercase text-center pl-10`}
          >
            2020
          </span>
        </div>
        <h4
          className={`text-xl text-stone-800 font-bold uppercase text-center`}
        >
          Forma & Flow
        </h4>
        <div className='flex justify-around text-lg text-stone-800 font-bold uppercase'>
          <a className='text-center cursor-pointer'>
            <Underline text='Services'></Underline>
          </a>
          <a className='text-center cursor-pointer'>
            <Underline text='Products'></Underline>
          </a>
          <a className='text-center cursor-pointer'>
            <Underline text='Contact'></Underline>
          </a>
        </div>
        <Clouds />
        <Sun />
        <Mountains />
      </div>

      <div className='sticky top-0'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='absolute left-20 top-20 w-[30vw] z-10 text-stone-900 font-bodoni'
        >
          <p className='font-thin italic z-10 text-2xl leading-6'>
            Our mission is to design with purpose, ensuring every creation
            balances form and flow to inspire, engage, and deliver meaningful
            experiences.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='w-[30vw] flex flex-col items-end absolute right-0 top-[20vh] text-stone-900 text-right'
        >
          <p className='font-bold uppercase pr-2'>
            To inspire and innovate through designs that effortlessly blend
            structure and movement, shaping brands and experiences that endure
          </p>
          <h4 className='uppercase font-bold text-[200px] leading-tight'>
            Design
          </h4>
        </motion.div>
      </div>

      <Waves />
    </div>
  )
}
