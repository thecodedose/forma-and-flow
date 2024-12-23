import { motion } from "framer-motion"
import Link from "next/link"
import Waves from "./Waves"
import Clouds from "./Clouds"
import Mountains from "./Mountains"
import Sun from "./Sun"
import Underline from "../Text/Underline"
import Typing from "../Text/Typing"
import Flip from "../Text/Flip"

export default function Hero() {
  return (
    <div className='h-[150vh] w-screen relative'>
      <div className='sticky top-0 grid grid-cols-2 lg:grid-cols-3 py-3 px-10'>
        <div className='hidden lg:block z-10'>
          <span className={`text-xl text-stone-800 uppercase`}>2020</span>
        </div>
        <h4
          className={`text-stone-800 text-xl lg:text-2xl font-bold uppercase z-10 lg:text-center`}
        >
          Forma & Flow
        </h4>
        <div className='flex gap-5 justify-between items-center lg:text-lg text-stone-800 font-bold uppercase z-10'>
          <Link className='text-center cursor-pointer' href='#services'>
            <Underline text='Services'></Underline>
          </Link>
          <Link className='text-center cursor-pointer' href='#products'>
            <Underline text='Products'></Underline>
          </Link>
          <a className='text-center cursor-pointer'>
            <Underline text='Contact'></Underline>
          </a>
        </div>
        <div
          className='absolute top-0 w-screen h-[60vh]'
          style={{
            background:
              "linear-gradient(#bff1ff, #eefffe, #ffe7ea, #c0cad6 80%)",
          }}
        >
          <div
            width={100}
            height={100}
            className='w-full h-full bg-[url("/noise.png")] opacity-30 bg-repeat-round'
          ></div>
        </div>
        <Clouds />
        <Sun />
        <Mountains />
      </div>

      <div className='sticky top-5 lg:top-0'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='absolute left-10 lg:left-20 top-5 lg:top-20 w-[30vw] z-10 text-stone-900'
        >
          <div className='font-bold uppercase z-10 leading-6'>
            <Typing
              text='Our mission is to design with purpose, ensuring every creation
            balances form and flow to inspire, engage, and deliver meaningful
            experiences.'
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='w-[30vw] flex flex-col items-start absolute right-0 top-5 lg:top-[20vh] text-stone-900'
        >
          <div className='font-bold uppercase pr-2 h-44 lg:h-12'>
            <Typing
              text='To inspire and innovate through designs that effortlessly blend
            structure and movement, shaping brands and experiences that endure'
            />
          </div>
          <h4 className='uppercase font-bold text-6xl hidden lg:text-[200px] leading-tight lg:flex'>
            {"Design".split("").map((t, index) => (
              <Flip
                key={index}
                text1={t}
                text2={t}
                lineHeight={"h-[1] lg:h-[200px]"}
              />
            ))}
          </h4>
        </motion.div>
      </div>

      <Waves />
    </div>
  )
}
