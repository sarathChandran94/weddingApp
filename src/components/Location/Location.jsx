import "./Location.css"
const Location = () => {
  return (
    <>
      <div className="locationDiv">
        {/* <h3>This is Locationdiv</h3> */}
        <div className="locDetails">
          <div className="timing">
            <h3>Muhoortham</h3>
            <p>
              <big>10:00</big> am to <big> 11:00 </big>am
            </p>
          </div>
          <div className="venue">
            <div className="venueAddress">
              <h3>Venue</h3>
              <p>
                <big>Moolayil Auditorium</big>
              </p>
              <p>Neelikkad (Ramassery road),</p>
              <p> Pudussery, Palakkad</p>
            </div>
            <div className="map">
              <iframe
                title="locationMap"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d833.1333457958712!2d76.7176858291624!3d10.77859431696415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDQ2JzQyLjkiTiA3NsKwNDMnMDUuNiJF!5e1!3m2!1sen!2sin!4v1678802103182!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Location
