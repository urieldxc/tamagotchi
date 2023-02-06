import React, { useEffect, useState } from 'react'
import CureButton from './CureButton';
import FeedButton from './FeedButton';
import PlayButton from './PlayButton';
import GameScreen from './GameScreen';

const Game = ({tamaName, setMode}) => {
    const [hunger, setHunger] = useState(100);
    const [health, setHealth] = useState(100);
    const [happiness, setHappiness] = useState(100);

    useEffect(() => {
        hunger  <= 0 && setMode("gameOver")
        health  <= 0 && setMode("gameOver")
        happiness  <= 0 && setMode("gameOver")
        
    }, [hunger, health, happiness]);
    return (
        <div className='text-white bg-violet-400 border-b-8 border-r-8 border-b-violet-800 border-r-violet-600 shadow-2xl p-4 rounded-3xl'>
            <GameScreen
                tamaName={tamaName}
                health={health}
                hunger={hunger}
                happiness={happiness}
            />
            <div className='flex gap-4 justify-center'>
                <FeedButton setHunger={setHunger} hunger={hunger} setHappiness={setHappiness} happiness={happiness} setHealth={setHealth} health={health} />
                <PlayButton setHappiness={setHappiness} happiness={happiness} setHunger={setHunger} hunger={hunger} />
                <CureButton setHealth={setHealth} health={health} setHappiness={setHappiness} happiness={happiness} />
            </div>


        </div>
    )
}

export default Game