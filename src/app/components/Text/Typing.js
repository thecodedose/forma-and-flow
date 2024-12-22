import { useEffect, useState } from "react"

export default function Typing({ text }) {
  const [idx, setIdx] = useState(0)
  const word = text.split("")
  useEffect(() => {
    const id = setInterval(() => {
      if (idx < word.length) {
        setIdx(idx + 1)
      }
    }, 50)

    return () => {
      clearInterval(id)
    }
  })

  return (
    <div>
      <span>{word.slice(0, idx).join("")}</span>
    </div>
  )
}
