import React from 'react'
import flowerLogo from "../assets/flower.jpg"

function Logo({ width = '100px' }) {
  return (
    <img
      src={flowerLogo}
      alt="Logo"
      style={{ width }}
      className="rounded-lg mix-blend-multiply"
    />
  )
}

export default Logo