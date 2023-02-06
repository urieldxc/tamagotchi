import React from 'react'
import heart from '../img/heart.png'
import meat from '../img/meat.png'
import happyface from '../img/happyface.png'

const GameScreen = ({ hunger, health, happiness, tamaName }) => {
  return (
    <div className='flex justify-between bg-cyan-50 border-l-8 border-t-8 border-t-slate-300  text-black my-4 rounded-lg shadow-xl p-6'>

      <div>
        <div className='flex gap-2'>
          <img src={heart}></img><p className='font-semibold mt-1'>{health}</p>
        </div>
        <div className='flex gap-2'>
          <img src={meat}></img><p className='font-semibold mt-1'>{hunger}</p>
        </div>
        <div className='flex gap-2'>
          <img src={happyface}></img><p className='font-semibold mt-1'>{happiness}</p>
        </div>
        
      </div>
      <div>
        <p className='font-semibold text-xl'>{tamaName}</p>
      </div>
    </div>
  )
}

export default GameScreen