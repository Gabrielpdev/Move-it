import React from 'react'
import { motion } from "framer-motion"

import { useProvider } from '../contexts/ChallengesContext'

import { Container } from '../styles/components/ExperienceBar'

export const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useProvider();

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Container>
      <span>0 xp</span>
      <div>
        <motion.div 
          animate={{ width: `${percentToNextLevel}%` }}
        />

        <motion.span animate={{ left: `${percentToNextLevel}%` }} >{currentExperience} xp</motion.span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Container>
  )
}
