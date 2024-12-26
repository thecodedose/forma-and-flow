export default function SolarSystem() {
  const planets = [
    {
      width: "w-[20vw]",
      height: "h-[20vw]",
      planetWidth: "w-[15px] h-[15px]",
      animate: "animate-[spin_10s_ease-in-out_infinite]",
    },
    {
      width: "w-[30vw]",
      height: "h-[30vw]",
      planetWidth: "w-[10px] h-[10px]",
      animate: "animate-[spin_25s_ease-in-out_infinite]",
    },
    {
      width: "w-[40vw]",
      height: "h-[40vw]",
      planetWidth: "w-[18px] h-[18px]",
      animate: "animate-[spin_20s_ease-in-out_infinite]",
    },
    {
      width: "w-[50vw]",
      height: "h-[50vw]",
      planetWidth: "w-[18px] h-[18px]",
      animate: "animate-[spin_15s_ease-in-out_infinite]",
    },
    {
      width: "w-[60vw]",
      height: "h-[60vw]",
      planetWidth: "w-[20px] h-[20px]",
      animate: "animate-[spin_25s_ease-in-out_infinite]",
    },
  ]
  return (
    <div className='opacity-30'>
      <div className='absolute h-screen w-screen top-0 flex justify-center items-center'>
        <div className='w-[5vw] h-[5vw] rounded-full bg-yellow-300'></div>
      </div>
      {planets.map(({ width, height, top, left, planetWidth, animate }, i) => (
        <div
          key={i}
          className='absolute h-screen w-screen top-0 flex justify-center items-center'
        >
          <div
            className={`${width} ${height} rounded-full border border-white relative ${animate}`}
          >
            <div
              className={`${planetWidth} bg-white absolute top-0 left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  )
}
