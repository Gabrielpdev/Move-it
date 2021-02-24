import React from 'react'
import { useProvider } from '../contexts/ChallengesContext'

import { Container } from '../styles/components/ExperienceBar'

export const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useProvider();

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Container>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span style={{ left: `${percentToNextLevel}%` }} >{currentExperience} xp</span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Container>
  )
}
