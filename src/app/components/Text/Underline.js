import { useState } from "react"

export default function Underline({ text }) {
  const [width, setWidth] = useState("w-0")
  return (
    <div
      onMouseEnter={() => setWidth("w-full")}
      onMouseLeave={() => setWidth("w-0")}
      className='flex flex-col w-fit justify-center items-center'
    >
      <span className='uppercase'>{text}</span>
      <div className={`h-[1px] ${width} bg-stone-500 -translate-y-1 transition-all`}></div>
    </div>
  )
}
