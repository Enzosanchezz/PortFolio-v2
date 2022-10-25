import React from 'react'
import Typewriter from "typewriter-effect";

export default function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Student",
          "Programmer",
          "Full Stack Developer",
          "Science and technology enthusiast.",
          "Self-taught"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}
