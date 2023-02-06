import './App.css';
import Game from './components/Game';
import {useState} from 'react'
import NewGame from './components/NewGame';

function App() {
  const [mode, setMode] = useState("start")
  const [tamaName, setTamaName] = useState("");

  return (
    <div className="App p-4 pt-32 container max-w-md mx-auto rounded-lg">
      {mode === 'start' && <NewGame setMode={setMode} setTamaName={setTamaName}/>}
      {mode === 'play' && <Game tamaName={tamaName} setMode={setMode}/>}
      {mode === 'gameOver' && <>GAME OVER</>}
    </div>
  );
}

export default App;
