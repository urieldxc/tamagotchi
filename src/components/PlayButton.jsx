import React, { useEffect, useState } from 'react'

const PlayButton = ({ setHappiness, setHunger, hunger, happiness }) => {

  const [coolDown, setCoolDown] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHappiness(happiness - 5);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [happiness]);

  useEffect(() => {
    if (coolDown) {
      const coolDownId = setTimeout(() => {
        setCoolDown(false);
      }, 4000);

      return () => clearTimeout(coolDownId);
    }
  }, [coolDown]);

  const play = () => {
    if (!coolDown) {
      if (happiness + 20 <= 100) {
        setHappiness(happiness + 20)
      } else { setHappiness(100); }
      setHunger(hunger - 10);
      setCoolDown(true);
    }
  };

  return (
    <div>
      <button
        className='bg-green-400 hover:bg-green-300 font-bold py-2 px-4 border-b-4 hover:border-green-500 border-green-700 disabled:opacity-50 disabled:grayscale rounded'
        onClick={play}
        disabled={coolDown}
      >
        Play
      </button>
    </div>
  )
}

export default PlayButton