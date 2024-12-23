import { useState, useRef } from "react"
import TallyModal from "./Modal"
import Mountains from "./Mountains"
import { motion } from "framer-motion"
import Flip from "../Text/Flip"

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const circleRef = useRef(null)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handleMouseEnter = () => {
    const ele = circleRef.current
    ele.style.top = "0"
  }

  const handleMouseLeave = () => {
    const ele = circleRef.current
    ele.style.top = "100%"
  }

  return (
    <div
      className='relative w-screen h-screen flex flex-col items-center p-20 overflow-hidden'
      style={{
        background:
          "url('/noise.png'), linear-gradient(#9fb1ad 10%, #def2e5 50%)",
        backgroundBlendMode: "multiply",
      }}
    >
      <motion.div
        animate={{ scale: 1.1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
        }}
        onClick={openModal}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        className='cursor-pointer overflow-hidden w-56 h-56 rounded-full flex justify-center items-center text-xl font-bold uppercase text-stone-900 transition-all'
        style={{
          background:
            "url('/noise.png'), radial-gradient(circle, #fff9e8, #ffffff)",
          backgroundRepeat: "round",
        }}
      >
        <div
          ref={circleRef}
          className='h-full w-full absolute pointer-events-none top-full rounded-full transition-[400]'
          style={{
            backgroundImage:
              "url('/noise.png'), radial-gradient(circle, #fff9e8, #ffcdd7)",
            backgroundRepeat: "round",
          }}
        ></div>
        <Flip text1='Forma & Flow' text2='Stay Connected' lineHeight={"h-5"} />
      </motion.div>

      <TallyModal isOpen={isModalOpen} onClose={closeModal} />
      <Mountains />
    </div>
  )
}
