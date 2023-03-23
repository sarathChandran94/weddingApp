import "./About.css"
import SruthiImg from "../../assets/images/sruthi-fit.webp"
import HareeshImg from "../../assets/images/hareesh.webp"
import VerDiv from "../../assets/cyberscooty-stylized-plant-separation.svg"
import { useRef, useEffect } from "react"
const About = () => {
  const brideRef = useRef()
  const groomRef = useRef()

  const aboutoptions = {
    threshold: 1
  }

  const revealOnScrollAbout = new IntersectionObserver(
    (entries, revealOnScrollAbout) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        else {
          entry.target.classList.add("appear")
          revealOnScrollAbout.unobserve(entry.target)
        }
      })
    },
    aboutoptions
  )

  useEffect(() => {
    revealOnScrollAbout.observe(brideRef.current)
    revealOnScrollAbout.observe(groomRef.current)
  })

  return (
    <>
      <div className="aboutContainer">
        <h2>About bride and groom</h2>
        <div className="card bride">
          <img src={SruthiImg} className="cardBrideImage" alt="sruthiImg" />
          <div ref={brideRef} className="cardContent bride fade-in">
            <h3>The Bride...</h3>
            <p>
              <em>
                <big>SRUTHI</big>
              </em>
              , daughter of <big>K Chandran</big> and <big>Sarala P</big>,
              Pudussery, Palakkad, now studying B.Ed in Ottapalam.
            </p>
          </div>
          <img src={VerDiv} className="verDiv" alt="verticalDivider" />
        </div>
        <div className="card groom">
          <img src={HareeshImg} className="cardGroomImage" alt="hareeshImg" />
          <div ref={groomRef} className="cardContent groom fade-in">
            <h3>The Groom...</h3>
            <p>
              <em>
                <big>HAREESH</big>
              </em>
              , son of <big>Sreekumaran K</big> and <big>Chandrika P</big>,
              Payyanadam, Mannarkkad, now working as a Civil Police Officer.
            </p>
          </div>
          <img src={VerDiv} className="verDiv" alt="verticalDivider" />
        </div>
      </div>
    </>
  )
}

export default About
