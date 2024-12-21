import { useState, useRef } from "react"
import TallyModal from "../Modal"
import Mountains from "./Mountains"
import { motion } from "framer-motion"

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const spanRef1 = useRef(null)
  const spanRef2 = useRef(null)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const showText = () => {
    spanRef1.current.style.transform = "translateY(-50%)"
    spanRef2.current.style.transform = "translateY(-50%)"
  }

  const hideText = () => {
    spanRef2.current.style.transform = "translateY(50%)"
    spanRef1.current.style.transform = "translateY(50%)"
  }

  return (
    <div className='relative w-screen h-screen flex flex-col items-center p-20 bg-stone-100 overflow-hidden'>
      <motion.div
        onMouseEnter={() => showText()}
        onMouseLeave={() => hideText()}
        animate={{ scale: 1.1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
        }}
        onClick={openModal}
        className='w-56 h-56 rounded-full flex justify-center items-center text-xl font-bold uppercase text-stone-900 bg-stone-300 hover:bg-stone-400 bg-[url("/noise.png")] transition-all'
      >
        <div className='relative w-full flex flex-col justify-center items-center p-0 h-6 overflow-hidden'>
          <span
            ref={spanRef1}
            className='inline-block transition-all translate-y-1/2'
          >
            Forma & Flow
          </span>
          <span
            ref={spanRef2}
            className='inline-block transition-all translate-y-1/2'
          >
            Stay Connected
          </span>
        </div>
      </motion.div>

      <TallyModal isOpen={isModalOpen} onClose={closeModal} />
      <Mountains />
    </div>
  )
}
