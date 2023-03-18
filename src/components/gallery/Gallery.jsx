import "./Gallery.css"
import smImg1 from "../../assets/images/img1-s.webp"
import smImg2 from "../../assets/images/img2-s.webp"
import smImg3 from "../../assets/images/img3-s.webp"
import smImg4 from "../../assets/images/img4-s.webp"
import smImg5 from "../../assets/images/img5-s.webp"
import smImg6 from "../../assets/images/img6-s.webp"
import smImg7 from "../../assets/images/img7-s.webp"
import smImg8 from "../../assets/images/img8-s.webp"
import smImg13 from "../../assets/images/img13-s.webp"
import smImg15 from "../../assets/images/img15-s.webp"
import smImg16 from "../../assets/images/img16-s.webp"
import smImg17 from "../../assets/images/img17-s.webp"
import smImg18 from "../../assets/images/img18-s.webp"
import smImg19 from "../../assets/images/img19-s.webp"
import smImg20 from "../../assets/images/img20-s.webp"
import smImg21 from "../../assets/images/img21-s.webp"
import smImg22 from "../../assets/images/img22-s.webp"
import smImg24 from "../../assets/images/img24-s.webp"
import mImg1 from "../../assets/images/img1-m.webp"
import mImg2 from "../../assets/images/img2-m.webp"
import mImg3 from "../../assets/images/img3-m.webp"
import mImg4 from "../../assets/images/img4-m.webp"
import mImg5 from "../../assets/images/img5-m.webp"
import mImg6 from "../../assets/images/img6-m.webp"
import mImg7 from "../../assets/images/img7-m.webp"
import mImg8 from "../../assets/images/img8-m.webp"
import mImg13 from "../../assets/images/img13-m.webp"
import mImg15 from "../../assets/images/img15-m.webp"
import mImg16 from "../../assets/images/img16-m.webp"
import mImg17 from "../../assets/images/img17-m.webp"
import mImg18 from "../../assets/images/img18-m.webp"
import mImg19 from "../../assets/images/img19-m.webp"
import mImg20 from "../../assets/images/img20-m.webp"
import mImg21 from "../../assets/images/img21-m.webp"
import mImg22 from "../../assets/images/img22-m.webp"
import mImg24 from "../../assets/images/img24-m.webp"
const Gallery = () => {
  let Imgs = [
    {
      col1: [
        { id: 0, sImgName: smImg1, mImgName: mImg1 },
        { id: 1, sImgName: smImg13, mImgName: mImg13 },
        { id: 2, sImgName: smImg20, mImgName: mImg20 },
        { id: 4, sImgName: smImg6, mImgName: mImg6 },
        { id: 5, sImgName: smImg3, mImgName: mImg3 },
        { id: 6, sImgName: smImg4, mImgName: mImg4 }
      ]
    },
    {
      col2: [
        { id: 7, sImgName: smImg7, mImgName: mImg7 },
        { id: 8, sImgName: smImg22, mImgName: mImg22 },
        { id: 9, sImgName: smImg19, mImgName: mImg19 },
        { id: 17, sImgName: smImg18, mImgName: mImg18 },
        { id: 10, sImgName: smImg16, mImgName: mImg16 },
        { id: 12, sImgName: smImg2, mImgName: mImg2 },
        { id: 19, sImgName: smImg15, mImgName: mImg15 }
      ]
    },
    {
      col3: [
        { id: 14, sImgName: smImg5, mImgName: mImg5 },
        { id: 15, sImgName: smImg8, mImgName: mImg8 },
        { id: 16, sImgName: smImg17, mImgName: mImg17 },
        { id: 24, sImgName: smImg24, mImgName: mImg24 },
        { id: 20, sImgName: smImg21, mImgName: mImg21 }
      ]
    }
  ]
  return (
    <>
      <div className="galleryMainDiv">
        {/* <h2>Engagement Photo Gallery</h2> */}
        <div className="gallery">
          <div className="row">
            <div className="col">
              {Imgs[0].col1.map((img, idx) => {
                return (
                  <picture key={idx}>
                    <source media="(max-width: 768px)" srcSet={img.sImgName} />
                    <source media="(min-width: 769px)" srcSet={img.mImgName} />
                    <img src={img.mImgName} alt="galImgs" />
                  </picture>
                )
              })}
            </div>
            <div className="col">
              {Imgs[1].col2.map((img, idx) => {
                return (
                  <picture key={idx}>
                    <source media="(max-width: 768px)" srcSet={img.sImgName} />
                    <source media="(min-width: 769px)" srcSet={img.mImgName} />
                    <img src={img.mImgName} alt="galImgs" />
                  </picture>
                )
              })}
            </div>
            <div className="col">
              {Imgs[2].col3.map((img, idx) => {
                return (
                  <picture key={idx}>
                    <source media="(max-width: 768px)" srcSet={img.sImgName} />
                    <source media="(min-width: 769px)" srcSet={img.mImgName} />
                    <img src={img.mImgName} alt="galImgs" />
                  </picture>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery
