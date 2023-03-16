import "./About.css"
import SruthiImg from "../../assets/images/sruthi-fit.jpg"
import HareeshImg from "../../assets/images/hareesh.jpg"
import VerDiv from "../../assets/cyberscooty-stylized-plant-separation.svg"
const About = () => {
  return (
    <>
      <div className="aboutContainer">
        <h2>About bride and groom</h2>
        <div className="card bride">
          <img src={SruthiImg} className="cardBrideImage" alt="sruthiImg" />
          <div className="cardContent bride">
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
          <div className="cardContent groom">
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
