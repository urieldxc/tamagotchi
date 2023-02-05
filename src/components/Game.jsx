import React, { useState } from 'react'
import CureButton from './CureButton';
import FeedButton from './FeedButton';
import PlayButton from './PlayButton';
import GameScreen from './GameScreen';

const Game = () => {
    const [hunger, setHunger] = useState(100);
    const [health, setHealth] = useState(100);
    const [happiness, setHappiness] = useState(100);
    return (
        <div>
            <GameScreen
                health={health}
                hunger={hunger}
                happiness={happiness}
            />

            <FeedButton setHunger={setHunger} />
            <CureButton setHealth={setHealth} />
            <PlayButton setHealth={setHappiness} />


        </div>
    )
}

export default Game