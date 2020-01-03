import React from "react"
import { useSpring, animated } from "react-spring"
import Img from "gatsby-image"

export const EachCoach = coach => {
  const { name, description, image, id } = coach.coach
  const [isExpanded, setExpanded] = React.useState(false)
  const ref = React.useRef(null)
  const vhToPixel = value => `${(window.innerHeight * value) / 100}px`
  const vwToPixel = value => `${(window.innerWidth * value) / 100}px`
  const style = useSpring({
    width: isExpanded ? vwToPixel(50) : "300px",
    height: isExpanded ? vhToPixel(35) : "300px",
    borderRadius: isExpanded ? "5px" : "10px",
    opacity: isExpanded ? 1 : 0.2,
    onRest: () => {
      if (isExpanded && ref.current) {
        ref.current.style.height = "700px"
        ref.current.style.width = "700px"
      }
    },
  })

  console.log(coach)
  return (
    <>
      <div className="outer-coach">
        <animated.div
          ref={ref}
          style={style}
          id={id}
          className="coach"
          onClick={() => setExpanded(!isExpanded)}
        >
          {console.log(isExpanded)}
          {!isExpanded ? (
            <Img className="coach__image" fluid={image.fluid} />
          ) : (
            <Img className="coach__image__expanded" fluid={image.fluid} />
          )}
          <p className="coach__name">{name}</p>
          <hr />
          <p className="coach__description">{description.description}</p>
        </animated.div>

        <div className="menu">
          {!isExpanded ? <></> : <div>Menu Goes Here</div>}
        </div>
      </div>
    </>
  )
}
