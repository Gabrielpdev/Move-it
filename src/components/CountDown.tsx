import { useEffect, useState } from 'react';
import { CountDownContainer, CountDownButton } from '../styles/components/CountDown'

export const CountDown: React.FC = () => {
  const [ time, setTime ] = useState(25 * 60);
  const [ active, setActive ] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  useEffect(() => {
    if(active && time > 0){
      setTimeout(() => { setTime(time - 1)}, 1000);
    }
  },[active, time])

  function startCountDown() {
    setActive(true);
  }

  function stopCountDown() {
    setActive(false);
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

      <CountDownButton type="button" onClick={startCountDown}>
        Iniciar um ciclo
      </CountDownButton>
    </div>
  )
}
