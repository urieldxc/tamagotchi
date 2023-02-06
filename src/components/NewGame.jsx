import React, { useState } from 'react'

const NewGame = ({ setMode, setTamaName }) => {

    const [name, setName] = useState()

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const handleNewGame = (e) => {
        e.preventDefault();
        if (e !== '') {
            setTamaName(name)
            setMode("play")
        }
    }
    return (
        <div className='container bg-violet-400 mx-auto max-w-sm p-6 rounded-lg shadow-lg shadow-slate-700'>
            <form  onSubmit={handleNewGame} className='pb-4'>
                <label className="block text-gray-700 text-sm font-bold mb-2" for="tamagotchiName">
                    Creature name
                </label>
                <input value={name} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tamagotchiName" type="text" placeholder="Choose a name..."></input>

                {/*Actualización futura: poder elegir el tipo de huevo y sus respectivos sprites*/}

            </form>
            <div className='flex justify-center w-full'>
                <button onClick={handleNewGame} className='bg-orange-500 hover:bg-orange-400 hover:scale-110 py-2 px-4 font-bold text-white rounded' >Let's Play!</button>
            </div>
        </div>
    )
}

export default NewGame