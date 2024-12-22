import { useRef } from "react"

export default function Flip({ text1, text2, lineHeight }) {
  const spanRef1 = useRef(null)
  const spanRef2 = useRef(null)

  const showText = () => {
    spanRef1.current.style.transform = "translateY(-50%)"
    spanRef2.current.style.transform = "translateY(-50%)"
  }

  const hideText = () => {
    spanRef2.current.style.transform = "translateY(50%)"
    spanRef1.current.style.transform = "translateY(50%)"
  }

  return (
    <div
      onMouseEnter={() => showText()}
      onMouseLeave={() => hideText()}
      className='h-full w-full cursor-pointer flex justify-center items-center font-bold uppercase transition-all'
    >
      <div
        className={`relative w-full flex flex-col justify-center items-center p-0 ${lineHeight} overflow-hidden`}
      >
        <span
          ref={spanRef1}
          className='inline-block transition-all translate-y-1/2'
        >
          {text1}
        </span>
        <span
          ref={spanRef2}
          className='inline-block transition-all translate-y-1/2'
        >
          {text2}
        </span>
      </div>
    </div>
  )
}
