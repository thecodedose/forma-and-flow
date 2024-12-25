import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import Underline from "./Text/Underline"

const SERVICES = [
  {
    title: "Web Design",
    p1: "We specialize in crafting visually stunning, highly responsive, and functionally robust websites that serve as a seamless extension of your brand. Our design approach focuses on balancing aesthetics with functionality, ensuring that your site not only looks great but also performs optimally across devices and platforms.",
    p2: " By prioritizing user experience and leveraging the latest web technologies, we create websites that engage visitors, communicate your message effectively, and drive measurable results, from lead generation to online sales. Let us transform your vision into a digital masterpiece that stands out in the crowded online landscape.",
    link: "https://tally.so/r/mYVJXq",
    img: "https://thecodedose.com/assets/confident-ritchie-123a6d.netlify_2.png",
  },
  {
    title: "Brand Identity",
    p1: "Your brand is more than just a logo—it's the story, personality, and promise that defines how your audience perceives you. We specialize in building cohesive and impactful brand identities that reflect your core values and resonate with your target audience.",
    p2: "From designing timeless logos and selecting signature color palettes to crafting messaging that communicates your brand's essence, we ensure consistency across every touchpoint.",
    link: "https://tally.so/r/mYVJXq",
    img: "https://thecodedose.com/assets/confident-ritchie-123a6d.netlify_2.png",
  },
  {
    title: "UI/UX Design",
    p1: "We bring your digital ideas to life by creating user-centric designs that prioritize functionality and simplicity. Our UI/UX design process revolves around deeply understanding your audience's needs and behaviors to craft interfaces that are not only visually appealing but also intuitive and easy to navigate.",
    p2: "By blending creative design principles with data-driven insights, we ensure that your platform provides a seamless and enjoyable user experience, enhancing engagement and retention. Whether it's an app, website, or complex software, we design with a focus on clarity, accessibility, and innovation, delivering products that users love to interact with.",
    link: "https://tally.so/r/mYVJXq",
    img: "https://thecodedose.com/assets/confident-ritchie-123a6d.netlify_2.png",
  },
]

export default function Services() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
  })

  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0vw", "-100vw", "-200vw"]
  )

  return (
    <div
      className='bg-[#000b1e]  w-screen h-[400vh]'
      ref={containerRef}
      id='services'
    >
      <div
        width={100}
        height={100}
        className='absolute w-full h-[400vh] bg-[url("/noise.png")] bg-repeat-round opacity-20'
      ></div>
      <div className='sticky top-0'>
        <div className='px-5 lg:px-20 py-5 lg:py-10'>
          <h4 className='uppercase text-4xl lg:text-8xl font-bold'>Services</h4>
          <p className='lg:w-1/2'>
            Forma & Flow was born out of the belief that great design is a
            delicate dance between structure and creativity. We build digital
            experiences that are not just visually stunning but also intuitive
            and impactful. Our team thrives on turning complex ideas into
            designs that tell your story effortlessly.
          </p>
        </div>
        <div className='w-screen overflow-hidden'>
          <motion.div
            style={{ x }}
            className='w-[300vw] h-screen flex gap-5 lg:gap-20 px-5 lg:px-20 sticky top-1/4 lg:top-1/3'
          >
            {SERVICES.map(({ title, link, p1, p2, img }, index) => (
              <div
                key={index}
                className='w-screen h-[70vh] md:h-fit flex justify-center'
              >
                <div
                  className='w-[90vw] lg:w-[70vw] bg-blend-overlay rounded-3xl grid lg:grid-cols-[1fr,2fr] items-center p-5 lg:p-10 gap-5 lg:gap-20'
                  style={{
                    background:
                      "url('/noise.png'), linear-gradient(45deg, #000b1e, #c0baa4)",
                  }}
                >
                  <div className='w-full relative flex justify-end'>
                    <span className='lg:text-5xl text-stone-400 font-bodoni italic absolute left-10 -translate-y-1/2'>{`0${
                      index + 1
                    }`}</span>
                    <div
                      style={{ backgroundImage: `url(${img})` }}
                      className='w-full h-[25vh] lg:h-[50vh] lg:w-[50vh] rounded-xl'
                    ></div>
                  </div>
                  <div className='flex flex-col gap-3 lg:gap-5'>
                    <div>
                      <h3 className='text-4xl lg:text-7xl uppercase font-thin'>
                        {title}
                      </h3>
                    </div>
                    <div className='lg:grid grid-cols-2 gap-5'>
                      <p>{p1}</p>
                      <p className='hidden lg:block'>{p2}</p>
                    </div>
                    <Underline
                      text={<a className='uppercase text-xl'>TALK TO US</a>}
                      underlineClass={"bg-stone-100"}
                      start='left'
                    ></Underline>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
