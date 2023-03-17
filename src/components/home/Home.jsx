import Title from "../title/Title"
import "./Home.css"
import bgImagePortrait from "../../assets/images/DSC_2718-portrait.jpg"
import bgImageLandscape from "../../assets/images/landscape.jpg"
import Date from "../date/DateAndTime"
import About from "../about/About"
import Gallery from "../gallery/Gallery"
import Location from "../Location/Location"
import Divider from "../../assets/Vintage-Decorative-Divider.svg"
const Home = () => {
  return (
    <>
      <div className="wrapper">
        <div className="header">
          <div className="background">
            <div className="overlay">
              <picture>
                <source
                  className="portrait"
                  media="(max-width:767px)"
                  srcSet={bgImagePortrait}
                  alt="bgImagePortrait"
                />
                <source
                  className="landscape"
                  media="(min-width:768px)"
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
          </div>

          <Title />
        </div>
        <div className="filler"></div>
        <div className="mainBody">
          <img src={Divider} alt="divider" />
          <Date />
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
