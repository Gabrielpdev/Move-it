import { createContext, useContext, useEffect, useState } from 'react';
import { useProvider } from './ChallengesContext';

interface CountDownContextData {
  minutes:number,
  seconds: number,
  hasFinished: boolean,
  isActive: boolean,
  startCountDown(): void,
  resetCountDown(): void,
}

export const CountDownContext = createContext({} as CountDownContextData);

let countdownTimeout: NodeJS.Timeout;

export const CountDownProvider: React.FC = ({ children }) => { 
  const { startNewChallenge } = useProvider();

  const [ time, setTime ] = useState(25 * 60);
  const [ isActive, setIsActive ] = useState(false);
  const [ hasFinished, setHasFinished ] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    if(isActive && time > 0){
      countdownTimeout = setTimeout(() => { 
        setTime(time - 1)
      }, 1000);
    } else if (isActive && time === 0 ) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  },[isActive, time])

  function startCountDown() {
    setIsActive(true);
  }

  function resetCountDown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false)
    setTime(25 * 60);
  }

  return (
    <CountDownContext.Provider value={{ 
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountDown,
      resetCountDown,
    }}>
      {children}
    </CountDownContext.Provider>
  );
};

export function useCountDown(): CountDownContextData {
  const context = useContext(CountDownContext);

  return context;
}