import React from "react"
import { useSpring, animated } from "react-spring"
import Img from "gatsby-image"

export const EachCoach = coach => {
  console.log(coach)
  const { name, description, image } = coach.coach
  const [isExpanded, setExpanded] = React.useState(false)

  const ref = React.useRef(null)

  const vhToPixel = value => `${(window.innerHeight * value) / 100}px`

  const vwToPixel = value => `${(window.innerWidth * value) / 100}px`

  const style = useSpring({
    width: isExpanded ? vwToPixel(25) : "200px",
    height: isExpanded ? vhToPixel(25) : "200px",
    borderRadius: isExpanded ? "0px" : "10px",
    onRest: () => {
      if (isExpanded && ref.current) {
        ref.current.style.height = "500px"
        ref.current.style.width = "500px"
      }
    },
  })

  return (
    <>
      <div className="coach">
        <animated.div
          ref={ref}
          style={style}
          onClick={e => setExpanded(!isExpanded)}
        >
          <Img className="coach__image" fluid={image.fluid} />
          <p className="coach__name">{name}</p>
          <hr />
          <p className="coach__description">{description.description}</p>
        </animated.div>
      </div>
      {/* {isExpanded === true ? (
        <div className="menu">Hello</div>
      ) : (
        <div className="menu">Please select your coach above</div>
      )} */}
    </>
  )
}
