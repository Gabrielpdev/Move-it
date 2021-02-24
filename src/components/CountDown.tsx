import { useEffect, useState } from 'react';
import { useProvider } from '../contexts/ChallengesContext';

import { CountDownContainer, CountDownButton, StopCountDownButton, FinishedCountDownButton } from '../styles/components/CountDown'

let countdownTimeout: NodeJS.Timeout;

export const CountDown: React.FC = () => {
  const { startNewChallenge } = useProvider();

  const [ time, setTime ] = useState(.05 * 60);
  const [ isActive, setIsActive ] = useState(false);
  const [ hasFinished, setHasFinished ] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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
    setTime(.1 * 60);
  }

  return (
    <div>
      <CountDownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>
        
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountDownContainer>

      {hasFinished ? (
        <FinishedCountDownButton disabled>
          Ciclo encerrado
        </FinishedCountDownButton>
      ) : (
        <>
          {!isActive ? (
            <CountDownButton type="button" onClick={startCountDown}>
              Iniciar um ciclo
            </CountDownButton>
          ) : (
            <StopCountDownButton type="button" onClick={resetCountDown}>
              Abandonar o ciclo
            </StopCountDownButton>
          )}
        </>
      )}
    </div>
  )
}
