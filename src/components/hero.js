import React from "react"
import HeroImage from "../images/Group 7.png"

export const Hero = () => {
  return (
    <div>
      <div className="hero">
        <img src={HeroImage} alt="" />
      </div>
      <div className="hero__break"></div>
    </div>
  )
}
