import { useEffect, useState } from 'react';
import { useProvider } from '../contexts/ChallengesContext';
import { useCountDown } from '../contexts/CountDownContext';

import { CountDownContainer, CountDownButton, StopCountDownButton, FinishedCountDownButton } from '../styles/components/CountDown'


export const CountDown: React.FC = () => {
  const {
    hasFinished, 
    isActive, 
    minutes, 
    resetCountDown,
    seconds,
    startCountDown
  } = useCountDown();

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  

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
