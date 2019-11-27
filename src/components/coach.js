import React from "react"
import { EachCoach } from "./eachCoach"

const Coach = content => {
  // console.log(content)

  return (
    <>
      <div className="coaches">
        <h1>
          Select Your Coach
          <hr />
        </h1>

        <ul>
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
        </ul>
        <div>ello</div>
        {/* {isExpanded === true ? (
          <div>Hello</div>
        ) : (
          <div>Please select your coach above</div>
        )} */}
      </div>
    </>
  )
}

export default Coach
