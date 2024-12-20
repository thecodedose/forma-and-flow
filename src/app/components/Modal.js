import React from "react"
import Modal from "react-modal"

const TallyModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel='Tally Form'
      style={{
        content: {
          maxWidth: "600px",
          margin: "auto",
        },
      }}
    >
      <button
        onClick={onClose}
        style={{ float: "right", border: "none", background: "none" }}
      >
        ✖️
      </button>
      <iframe
        src='https://tally.so/embed/nP8WyV?alignLeft=1&transparentBackground=1&dynamicHeight=1' // Replace with your Tally form link
        width='100%'
        height='600px'
        frameBorder='0'
        title='Tally Form'
      ></iframe>
    </Modal>
  )
}

export default TallyModal
