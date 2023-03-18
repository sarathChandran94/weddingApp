import "./Title.css"
const Title = (prop) => {
  return (
    <>
      <div className="title">
        <h1 ref={prop.value} className="mainTitle fade-in">
          Sruthi & Hareesh
        </h1>
      </div>
    </>
  )
}

export default Title
