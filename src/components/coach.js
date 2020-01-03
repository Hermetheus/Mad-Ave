import React from "react"
import { EachCoach } from "./EachCoach"

const Coach = content => {
  console.log(content)
  const edges = content.content.data.allContentfulMadAveCoaches
  console.log(edges)

  return (
    <>
      <div className="coaches">
        <h1>
          Select Your Coach
          <hr />
        </h1>

        <div className="alignCoach">
          {content.content.data.allContentfulMadAveCoaches.edges.map(
            (edge, index) => {
              // console.log(edge)
              return (
                <>
                  <EachCoach coach={edge.node} key={index} />
                </>
              )
            }
          )}
        </div>
      </div>
    </>
  )
}

export default Coach
