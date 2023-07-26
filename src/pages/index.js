import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".page1 .box", {
      scale: 0,
      opacity: 0,
      rotate: 360,
      duration: 1.5,
      delay: 1
    })

    gsap.from(".page2 .box", {
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
      <div className="page1">
        <div className="box"></div>
      </div>
      <div className="page2">
        <div className="box"></div>
      </div>
      <div className="page3">
        <div className="box"></div>
      </div>
    </div>
  )
}
