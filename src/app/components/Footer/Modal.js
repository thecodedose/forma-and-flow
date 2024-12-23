import React, { useEffect } from "react"
import Modal from "react-modal"

const TallyModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel='Tally Form'
      className={
        "rounded-xl outline-none bg-[url('/noise.png')] bg-stone-100 self-center p-10 shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-fit flex flex-col items-end w-1/2"
      }
    >
      <button
        onClick={onClose}
        className='self-right'
      >
        ✖️
      </button>
      <iframe
        src='https://tally.so/embed/nP8WyV?alignLeft=1&transparentBackground=1&dynamicHeight=1' // Replace with your Tally form link
        width='100%'
        height='350px'
        frameBorder='0'
        title='Tally Form'
      ></iframe>
    </Modal>
  )
}

export default TallyModal
