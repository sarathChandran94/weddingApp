import "./DateAndTime.css"
// import { useEffect, useState, useRef } from "react"
import Cal from "../../assets/calendar.svg"
import Hourglass from "../../assets/hourglass.svg"
import SimpleDivider from "../../assets/simple_divider.svg"
import FlipCountdown from "@rumess/react-flip-countdown"
import { useRef } from "react"
import { useEffect } from "react"

const DateAndTime = () => {
  const dateFormat = new Intl.DateTimeFormat("en-in", { dateStyle: "full" })
  const saveTheDate = new Date("April 30, 2023")
  saveTheDate.toLocaleString()
  let date = dateFormat.format(saveTheDate)

  // for FlipCountdown module
  const timeUpFn = () => {
    alert("time's Up!!")
  }

  // For fade animations

  const dateRef = useRef()
  const timerRef = useRef()
  const myoptions = {
    threshold: 1,
    rootMargin: "0px 0px -50px 0px"
  }

  const revealOnScroll = new IntersectionObserver((entries, revealOnScroll) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      else {
        entry.target.classList.add("appear")
        revealOnScroll.unobserve(entry.target)
      }
    })
  }, myoptions)

  useEffect(() => {
    revealOnScroll.observe(dateRef.current)
    revealOnScroll.observe(timerRef.current)
  })

  // for BACKUP TIMER
  // const [timerDays, setTimerDays] = useState(Number)
  // const [timerHours, setTimerHours] = useState(Number)
  // const [timerMinutes, setTimerMinutes] = useState(Number)
  // const [timerSeconds, setTimerSeconds] = useState(Number)

  // const countDownFrom = new Date("30 April 2023").getTime()
  // const startDate = () => {
  //   let interval = setInterval(() => {
  //     const now = new Date().getTime()
  //     const difference = countDownFrom - now
  //     const days = Math.floor(difference / (24 * 60 * 60 * 1000))
  //     const hours = Math.floor(
  //       (difference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
  //     )
  //     const minutes = Math.floor((difference % (60 * 60 * 1000)) / (1000 * 60))
  //     const seconds = Math.floor((difference % (60 * 1000)) / 1000)
  //     if (difference < 0) clearInterval(interval.current)
  //     else {
  //       setTimerDays(days)
  //       setTimerHours(hours)
  //       setTimerMinutes(minutes)
  //       setTimerSeconds(seconds)
  //     }
  //   })
  // }

  // useEffect(() => {
  //   startDate()
  // }, [])

  return (
    <>
      <div className="dateContainer">
        <div ref={dateRef} className="saveTheDate fade-in">
          <div className="icon">
            <img src={Cal} alt="calenderIcon" />
          </div>
          {/* <img src={SimpleDivider} className="vl" alt="divider" /> */}
          <div className="dates">
            <h3>Save the Date</h3>
            <p>{date}</p>
          </div>
        </div>
        <div ref={timerRef} className="countdown fade-in">
          <div className="icon">
            <img src={Hourglass} alt="hourglassIcon" />
          </div>
          {/* <img src={SimpleDivider} className="vl" alt="divider" /> */}
          <div className="timer">
            <FlipCountdown
              size="extra-small"
              hideYear
              // hideMonth
              endAt={"2023-04-30 10:00:00"}
              // onTimeUp={timeUpFn}
            />
          </div>
        </div>
      </div>

      {/* BACKUP TIMER */}
      {/* <div className="timerElem ">
              {timerDays} <span className="timerText">d</span>{" "}
            </div>
            <div className="timerElem ">
              {timerHours} <span className="timerText">h</span>{" "}
            </div>
            <div className="timerElem ">
              {timerMinutes} <span className="timerText">m</span>{" "}
            </div>
            <div className="timerElem sec">
              {timerSeconds} <span className="timerText">s</span>
            </div> */}
      {/* <div className="flipCard flip">
              <div className="top">{timerDays}</div>
              <div className="bottom">{timerDays}</div>
            </div>
            <div className="flipCard flip">
              <div className="top">{timerHours}</div>
              <div className="bottom">{timerHours}</div>
            </div>
            <div className="flipCard flip">
              <div className="top">{timerMinutes}</div>
              <div className="bottom">{timerMinutes}</div>
            </div>
            <div className="flipCard flip">
              <div className="top">{timerSeconds}</div>
              <div className="bottom">{timerSeconds}</div>
            </div> */}
      {/* <div className="flipCard flip">
        <div className="top">
          {timerSeconds < 10 ? "0" + timerSeconds : timerSeconds}
        </div>
        <div className="bottom">
          {timerSeconds < 10 ? "0" + timerSeconds : timerSeconds}
        </div>
      </div> */}

      {/* <Flipcard>
        <div className="top">
          {timerSeconds < 10 ? "0" + timerSeconds : timerSeconds}
        </div>
        <div className="bottom">
          {timerSeconds < 10 ? "0" + timerSeconds : timerSeconds}
        </div>
      </Flipcard> */}
      {/* <div className="flipcard">
        <div className="top" data-value={timerSeconds}>
          {timerSeconds < 10 ? "0" + timerSeconds : timerSeconds}
        </div>
        <div className="bottom" data-set={timerSecondsPlusOne}>
          {timerSeconds < 10 ? "0" + timerSeconds : timerSeconds}
        </div>
      </div> */}
    </>
  )
}

export default DateAndTime
