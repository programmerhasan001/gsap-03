import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const page1 = useRef(null)
  const page2 = useRef(null)
  const page3 = useRef(null)
  const box1 = useRef(null)
  const box2 = useRef(null)
  const box3 = useRef(null)

  useEffect(() => {

    gsap.from(box1.current, {
      scale: 0,
      opacity: 0,
      rotate: 360,
      duration: 1.5,
      delay: 1
    })

    gsap.from(box2.current, {
      scale: 0,
      opacity: 0,
      rotate: 360,
      duration: 1.5,
      delay: 1,
      scrollTrigger: {
        trigger: '.page2 .box'
      }
    })
  }, [])
  return (
    <div>
      <div className="page1" ref={page1}>
        <div className="box" ref={box1}></div>
      </div>
      <div className="page2" ref={page2}>
        <div className="box" ref={box2}></div>
      </div>
      <div className="page3" ref={page3}>
        <div className="box" ref={box3}></div>
      </div>
    </div>
  )
}
