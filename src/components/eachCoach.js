import React from "react"
import { useSpring, animated } from "react-spring"
import Img from "gatsby-image"

export const EachCoach = content => {
  console.log(content)

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
        ref.current.style.height = "auto"
        ref.current.style.width = "500px"
      }
    },
  })

  return (
    <>
      {content.content.content.data.allContentfulMadAveCoaches.edges.map(
        edge => {
          const { id, image, name, description } = edge.node

          return (
            <div className="">
              <ul className="coach" key={id} id={id}>
                <div>
                  <animated.div
                    key={id}
                    id={id}
                    ref={ref}
                    style={style}
                    onClick={e => setExpanded(!isExpanded)}
                  >
                    <Img className="coach__image" fluid={image.fluid} />

                    <p className="coach__name">{name}</p>
                    <hr />
                    <p className="coach__description">
                      {description.description}
                    </p>
                  </animated.div>
                </div>
              </ul>
            </div>
          )
        }
      )}
    </>
  )
}
