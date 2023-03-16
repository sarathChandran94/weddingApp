import "./Gallery.css"
import smImg1 from "../../assets/images/img1-s.jpg"
import smImg2 from "../../assets/images/img2-s.jpg"
import smImg3 from "../../assets/images/img3-s.jpg"
import smImg4 from "../../assets/images/img4-s.jpg"
import smImg5 from "../../assets/images/img5-s.jpg"
import smImg6 from "../../assets/images/img6-s.jpg"
import smImg7 from "../../assets/images/img7-s.jpg"
import smImg8 from "../../assets/images/img8-s.jpg"
import smImg9 from "../../assets/images/img9-s.jpg"
import smImg10 from "../../assets/images/img10-s.jpg"
import smImg11 from "../../assets/images/img11-s.jpg"
import smImg12 from "../../assets/images/img12-s.jpg"
import smImg13 from "../../assets/images/img13-s.jpg"
import smImg14 from "../../assets/images/img14-s.jpg"
import smImg15 from "../../assets/images/img15-s.jpg"
import smImg16 from "../../assets/images/img16-s.jpg"
import smImg17 from "../../assets/images/img17-s.jpg"
import smImg18 from "../../assets/images/img18-s.jpg"
import smImg19 from "../../assets/images/img19-s.jpg"
import smImg20 from "../../assets/images/img20-s.jpg"
import smImg21 from "../../assets/images/img21-s.jpg"
import smImg22 from "../../assets/images/img22-s.jpg"
import smImg23 from "../../assets/images/img23-s.jpg"
import smImg24 from "../../assets/images/img24-s.jpg"
import mImg1 from "../../assets/images/img1-m.jpg"
import mImg2 from "../../assets/images/img2-m.jpg"
import mImg3 from "../../assets/images/img3-m.jpg"
import mImg4 from "../../assets/images/img4-m.jpg"
import mImg5 from "../../assets/images/img5-m.jpg"
import mImg6 from "../../assets/images/img6-m.jpg"
import mImg7 from "../../assets/images/img7-m.jpg"
import mImg8 from "../../assets/images/img8-m.jpg"
import mImg9 from "../../assets/images/img9-m.jpg"
import mImg10 from "../../assets/images/img10-m.jpg"
import mImg11 from "../../assets/images/img11-m.jpg"
import mImg12 from "../../assets/images/img12-m.jpg"
import mImg13 from "../../assets/images/img13-m.jpg"
import mImg14 from "../../assets/images/img14-m.jpg"
import mImg15 from "../../assets/images/img15-m.jpg"
import mImg16 from "../../assets/images/img16-m.jpg"
import mImg17 from "../../assets/images/img17-m.jpg"
import mImg18 from "../../assets/images/img18-m.jpg"
import mImg19 from "../../assets/images/img19-m.jpg"
import mImg20 from "../../assets/images/img20-m.jpg"
import mImg21 from "../../assets/images/img21-m.jpg"
import mImg22 from "../../assets/images/img22-m.jpg"
import mImg23 from "../../assets/images/img23-m.jpg"
import mImg24 from "../../assets/images/img24-m.jpg"
const Gallery = () => {
  let Imgs = [
    {
      col1: [
        { id: 0, sImgName: smImg1, mImgName: mImg1 },
        { id: 1, sImgName: smImg13, mImgName: mImg13 },
        { id: 2, sImgName: smImg20, mImgName: mImg20 },
        { id: 3, sImgName: smImg11, mImgName: mImg11 },
        { id: 4, sImgName: smImg6, mImgName: mImg6 },
        { id: 5, sImgName: smImg3, mImgName: mImg3 },
        { id: 6, sImgName: smImg4, mImgName: mImg4 },
        { id: 22, sImgName: smImg23, mImgName: mImg23 }
      ]
    },
    {
      col2: [
        { id: 7, sImgName: smImg7, mImgName: mImg7 },
        { id: 8, sImgName: smImg22, mImgName: mImg22 },
        { id: 9, sImgName: smImg19, mImgName: mImg19 },
        { id: 17, sImgName: smImg18, mImgName: mImg18 },
        { id: 10, sImgName: smImg16, mImgName: mImg16 },
        { id: 11, sImgName: smImg12, mImgName: mImg12 },
        { id: 12, sImgName: smImg2, mImgName: mImg2 },
        { id: 13, sImgName: smImg14, mImgName: mImg14 }
      ]
    },
    {
      col3: [
        { id: 14, sImgName: smImg5, mImgName: mImg5 },
        { id: 15, sImgName: smImg8, mImgName: mImg8 },
        { id: 16, sImgName: smImg17, mImgName: mImg17 },
        { id: 21, sImgName: smImg9, mImgName: mImg9 },
        { id: 24, sImgName: smImg24, mImgName: mImg24 },
        { id: 18, sImgName: smImg10, mImgName: mImg10 },
        { id: 19, sImgName: smImg15, mImgName: mImg15 },
        { id: 20, sImgName: smImg21, mImgName: mImg21 }
      ]
    }
  ]
  return (
    <>
      <div className="galleryMainDiv">
        <h2>Engagement Photo Gallery</h2>
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
