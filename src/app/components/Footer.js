import { useState } from "react"
import TallyModal from "./Modal"

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center p-20'>
      <span className='text-8xl font-bold uppercase'>Forma & Flow</span>
      <div className='flex justify-center'>
        <button
          onClick={openModal}
          className='bg-white text-black text-xl rounded-lg px-10 py-3 my-3'
        >
          Stay connected!
        </button>

        <TallyModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  )
}
