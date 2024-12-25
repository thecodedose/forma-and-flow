import { useState } from "react"

export default function Underline({
  text,
  underlineClass = "bg-stone-800",
  start = "center",
}) {
  const [width, setWidth] = useState("w-0")
  let align = "items-center"
  if (start === "left") {
    align = "items-start"
  } else if (start === "right") {
    align = "items-end"
  }

  return (
    <div
      onMouseEnter={() => setWidth("w-full")}
      onMouseLeave={() => setWidth("w-0")}
      className={`flex flex-col w-fit justify-center ${align}`}
    >
      <span className='uppercase'>{text}</span>
      <div
        className={`h-[1px] ${width} -translate-y-1 transition-all ${underlineClass}`}
      ></div>
    </div>
  )
}
