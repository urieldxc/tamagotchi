import React from 'react'

const GameScreen = ({hunger, health, happiness}) => {
  return (
    <div>
      <p>Health: {health}</p>
      <p>Happiness: {happiness}</p>
      <p>Hunger: {hunger}</p>
    </div>
  )
}

export default GameScreen