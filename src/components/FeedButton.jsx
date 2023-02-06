import React, { useEffect, useState } from 'react'

const FeedButton = ({ setHunger, setHappiness, setHealth, hunger, happiness, health }) => {

  const [coolDown, setCoolDown] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHunger(hunger - 5);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [hunger]);

  useEffect(() => {
    if (coolDown) {
      const coolDownId = setTimeout(() => {
        setCoolDown(false);
      }, 4000);

      return () => clearTimeout(coolDownId);
    }
  }, [coolDown]);

  const feed = () => {
    if (!coolDown) {
      if (hunger + 10 <= 100) {
        setHunger(hunger + 20);
        setHappiness(happiness + 10);
      } else {
        setHunger(hunger - 10);
        setHappiness(happiness - 10);
      }
      setCoolDown(true);
    }
  };

  return (
    <div>
      <button
        className='bg-blue-500  hover:bg-blue-400 font-bold py-2 px-4 border-b-4 hover:border-blue-500 border-blue-700 disabled:opacity-50 disabled:grayscale rounded'
        onClick={feed}
        disabled={coolDown}
      >
        Feed
      </button>
    </div>
  )
}

export default FeedButton