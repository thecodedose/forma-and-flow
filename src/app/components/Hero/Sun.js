import { motion, useAnimationFrame } from "framer-motion"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

export default function Sun() {
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 })
  const currentPosition = useRef({ x: 0, y: 0 })
  const sunElementRef = useRef(null)

  const lerp = (start, end, t) => start + (end - start) * t

  useEffect(() => {
    const handleMouseMove = (event) => {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      const offsetX = (event.clientX / windowWidth) * 2 - 1
      const offsetY = (event.clientY / windowHeight) * 2 - 1

      setTargetPosition({ x: offsetX * 20, y: offsetY * 20 })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useAnimationFrame(() => {
    currentPosition.current.x = lerp(
      currentPosition.current.x,
      targetPosition.x,
      0.1
    )
    currentPosition.current.y = lerp(
      currentPosition.current.y,
      targetPosition.y,
      0.1
    )

    if (sunElementRef.current) {
      sunElementRef.current.style.transform = `translate(calc(-50% + ${currentPosition.current.x}px), calc(-50% + ${currentPosition.current.y}px))`
    }
  })

  return (
    <motion.div
      initial={{ x: "-50%", y: "-25%" }}
      animate={{ y: "-50%" }}
      transition={{ type: "spring", ease: "easeOut" }}
      ref={sunElementRef}
      className='h-32 w-32 lg:w-52 lg:h-52 overflow-hidden rounded-full absolute top-[30vh] left-1/2'
      style={{ background: "radial-gradient(circle, #ff87a0, #fff2bb)" }}
    >
      <div
        width={100}
        height={100}
        className='w-full h-full bg-[url("/noise.png")] opacity-80 bg-repeat-round'
      ></div>
    </motion.div>
  )
}
