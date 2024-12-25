import React, { useEffect, useRef, useState } from "react"
import { useAnimationFrame } from "framer-motion"

const lerp = (start, end, t) => {
  return start + (end - start) * t
}

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const cursorPositionRef = useRef({ x: 0, y: 0 })
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    cursorPositionRef.current = { x: e.clientX, y: e.clientY + window.scrollY }
    if (e.target.tagName === "A") {
      cursorRef.current.style.height = "50px"
      cursorRef.current.style.width = "50px"
      cursorRef.current.style.background = "none"
      cursorRef.current.style.border = "1px solid white"
    } else {
      cursorRef.current.style.height = "10px"
      cursorRef.current.style.width = "10px"
      cursorRef.current.style.border = "none"
      cursorRef.current.style.background = "white"
    }
    console.log(e.target.id)
    if (e.target.id === "services") {
      cursorRef.current.style.border = "1px solid white"
    }
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useAnimationFrame(() => {
    setCurrentPosition((prev) => ({
      x: lerp(prev.x, cursorPositionRef.current.x, 0.15),
      y: lerp(prev.y, cursorPositionRef.current.y, 0.15),
    }))
  })

  return (
    <div className='hidden md:block'>
      <div
        ref={cursorRef}
        className='absolute w-[10px] h-[10px] rounded-full bg-white z-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none'
        style={{
          left: `${currentPosition.x}px`,
          top: `${currentPosition.y}px`,
          transition: "width 0.3s ease, height 0.3s ease-out",
        }}
      ></div>
    </div>
  )
}

export default CustomCursor
