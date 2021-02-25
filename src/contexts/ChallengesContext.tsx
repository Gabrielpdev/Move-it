import { createContext, useContext, useEffect, useState } from 'react';
import useSound from 'use-sound';
import challenges from '../../challenges.json';

import notifications from '../../public/sounds/notification.mp3';
interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ProviderContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  experienceToNextLevel: number;
  activeChallenge: Challenge;
  levelUp(): void;
  startNewChallenge(): void;
  resetChallenge(): void;
  completeChallenge(): void;
}

export const ChallengesContext = createContext({} as ProviderContextData);

export const ChallengesProvider: React.FC = ({ children }) => {
  const [level, setLevel] = useState(1);

  const [play] = useSound(notifications)
  const [currentExperience, setCurrentExperience] = useState(0);
    
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission();
  },[])

  function levelUp() {
    setLevel(level + 1);
  } 

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge);

    play();

    if(Notification.permission === 'granted'){
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount}xp!`
      })
    }
  } 

  function resetChallenge() {
    setActiveChallenge(null);
  } 

  function completeChallenge() {
    if(!activeChallenge){
      return;
    }
    const { amount } = activeChallenge;
    let finalExperience = currentExperience + amount;

    if(finalExperience >= experienceToNextLevel){
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setChallengesCompleted(challengesCompleted + 1);
    setActiveChallenge(null);
  } 

  return (
    <ChallengesContext.Provider value={{ 
      level, 
      levelUp, 
      currentExperience, 
      experienceToNextLevel,
      challengesCompleted, 
      activeChallenge, 
      startNewChallenge,
      resetChallenge,
      completeChallenge
    }}>
      {children}
    </ChallengesContext.Provider>
  );
};

export function useProvider(): ProviderContextData {
  const context = useContext(ChallengesContext);

  return context;
}