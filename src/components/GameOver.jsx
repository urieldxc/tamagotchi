import React from 'react'

const GameOver = ({ tamaName }) => {

    const handleTryAgain =() =>{
        window.location.reload(false);
    }
    return (
        <div className=' flex flex-col justify-center text-white bg-gray-400 border-b-8 border-r-8 border-b-gray-800 border-r-gray-600 shadow-2xl p-4 rounded-3xl'>
            <p className='text-center'>R.I.P 💀 - {tamaName} left us 😥</p>
            <button onClick={handleTryAgain} className=' m-8 w-2/4 mx-auto bg-gray-600 hover:bg-gray-500 hover:scale-110 py-2 px-4 font-bold text-white rounded' >Try again...</button>
        </div>
    )
}

export default GameOver