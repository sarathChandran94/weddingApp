import Title from "../title/Title"
import "./Home.css"
import bgImagePortrait from "../../assets/images/welcomePic-mobile.webp"
import bgImageLandscape from "../../assets/images/welcomePic-web.webp"
import DateAndTime from "../date/DateAndTime"
import About from "../about/About"
import Gallery from "../gallery/Gallery"
import Location from "../Location/Location"
import Divider from "../../assets/Vintage-Decorative-Divider.svg"
import { useRef, useEffect } from "react"
const Home = () => {
  const bgImgRef = useRef()
  const titleRef = useRef()

  const appearOptions = {}

  const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return
      } else {
        entry.target.classList.add("appear")
        appearOnScroll.unobserve(entry.target)
      }
    })
  }, appearOptions)

  useEffect(() => {
    appearOnScroll.observe(bgImgRef.current)
    appearOnScroll.observe(titleRef.current)
  }, [])

  return (
    <>
      <div className="wrapper">
        <div className="header">
          <div className="background">
            <picture ref={bgImgRef} className="overlay fade-in">
              <source
                className="portrait"
                media="(max-width:768px)"
                srcSet={bgImagePortrait}
                alt="bgImagePortrait"
              />
              <source
                className="landscape"
                media="(min-width:769px)"
                srcSet={bgImageLandscape}
                alt="bgImageLandscape"
              />
              <img
                className="portrait"
                src={bgImagePortrait}
                alt="bgImagePortrait"
              />
            </picture>
          </div>

          <Title value={titleRef} />
        </div>
        <div className="filler"></div>
        <div className="mainBody">
          <img src={Divider} alt="divider" />
          <DateAndTime />
          <img src={Divider} alt="divider" />
          <About />
          <img src={Divider} alt="divider" />
          <Location />
          <img src={Divider} alt="divider" />
          <Gallery />
        </div>
      </div>
    </>
  )
}

export default Home
