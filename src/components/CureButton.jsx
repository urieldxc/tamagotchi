import React, { useEffect, useState } from 'react'

const CureButton = ({ setHappiness, happiness, setHealth, health }) => {

  const [coolDown, setCoolDown] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHealth(health - 1);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [health]);

  useEffect(() => {
    if (coolDown) {
      const coolDownId = setTimeout(() => {
        setCoolDown(false);
      }, 4000);

      return () => clearTimeout(coolDownId);
    }
  }, [coolDown]);

  const cure = () => {
    if (!coolDown) {
      if (health + 10 <= 100) {
        setHealth(health + 10);
        setHappiness(happiness - 20);
      } else {
        setHealth(100);
        setHappiness(happiness - 20);
      }
      setCoolDown(true)
    }
  };

  return (
    <div>
      <button
        className='bg-fuchsia-400 hover:bg-fuchsia-300 font-bold py-2 px-4 border-b-4 hover:border-fuchsia-500 border-fuchsia-700 disabled:opacity-50 disabled:grayscale rounded'
        onClick={cure}
        disabled={coolDown}
      >
        Cure
      </button>
    </div>
  )
}

export default CureButton