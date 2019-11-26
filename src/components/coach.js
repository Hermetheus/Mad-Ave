import React from "react"
import { EachCoach } from "./eachCoach"

const Coach = content => {
  console.log(content)

  return (
    <>
      <div className="coaches">
        <h1>
          Select Your Coach
          <hr />
        </h1>
      </div>
      <EachCoach content={content} />
    </>
  )
}

export default Coach
