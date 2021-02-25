import React from 'react'
import { useProvider } from '../contexts/ChallengesContext';
import { useCountDown } from '../contexts/CountDownContext';

import { Container, ChallengeActive, ChallengeNotActive,FailedButton, SucceededButton } from '../styles/components/ChallengeBox'

export const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useProvider();
  const { resetCountDown } = useCountDown();

  function handleChallengeSucceeded(){
    completeChallenge()
    resetCountDown()
  }

  function handleChallengeFailed(){
    resetChallenge()
    resetCountDown()
  }

  return (
    <Container>
      {activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <FailedButton type="button" onClick={handleChallengeFailed}>Falhei</FailedButton>
            <SucceededButton type="button" onClick={handleChallengeSucceeded}>Completei</SucceededButton>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>

          <p>
            <img src="icons/level-up.svg" alt=""/>
            Avance de level completando desafios.
          </p>
        </ChallengeNotActive>
      )}
    </Container>
  )
}
