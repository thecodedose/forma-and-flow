import { motion } from "framer-motion"

function Bubble({ width, height, top, left, bottom, right, scale }) {
  return (
    <motion.div
      initial={{ x: "0", y: "0" }}
      animate={{
        x: Math.abs(Math.random() * 20) + "px",
        y: Math.abs(Math.random() * 20) + "px",
      }}
      transition={{
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
      }}
      style={{
        background: "radial-gradient(circle, #385f70, #21466b,#000b1e )",
        scale: scale,
      }}
      className={`${width} ${height} ${top} ${bottom} ${left} ${right} overflow-hidden rounded-full absolute opacity-70`}
    >
      <div
        width={100}
        height={100}
        alt=''
        className='w-full h-full bg-[url("/noise.png")] opacity-20 bg-repeat-round'
      />
    </motion.div>
  )
}

export default function Bubbles({ scale }) {
  const bubbles = [
    { width: "w-[15vw]", height: "h-[15vw]", top: "top-1/4", left: "left-32" },
    { width: "w-[25vw]", height: "h-[25vw]", top: "top-1/8", left: "left-1/2" },
    { width: "w-[30vw]", height: "h-[30vw]", top: "top-2/3", left: "left-16" },
    {
      width: "w-[35vw]",
      height: "h-[35vw]",
      top: "top-1/3",
      left: "right-[8vw]",
    },
  ]

  const generateBubbles = () => {
    return bubbles.map((bubble, index) => (
      <Bubble {...bubble} key={index} scale={scale} />
    ))
  }
  return <div className='top-0 w-full h-screen sticky'>{generateBubbles()}</div>
}
