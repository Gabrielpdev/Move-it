import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import useSound from 'use-sound';
import challenges from '../../challenges.json';
import Cookies from 'js-cookie';

import notifications from '../../public/sounds/notification.mp3';
import LevelUpModal from '../components/LevelUpModal';
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
  closeLevelUpModal(): void;
}
interface ChallengesProviderPorps {
  children: ReactNode
  level: number
  currentExperience: number 
  challengesCompleted: number
}

export const ChallengesContext = createContext({} as ProviderContextData);

export const ChallengesProvider: React.FC = ({ children, ...rest }: ChallengesProviderPorps) => {
  const [level, setLevel] = useState(rest.level ?? 1);

  const [play] = useSound(notifications)
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
  const [activeChallenge, setActiveChallenge] = useState(null)
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission();
  },[])

  useEffect(() => {
    Cookies.set("level", String(level))
    Cookies.set("currentExperience", String(currentExperience))
    Cookies.set("challengesCompleted", String(challengesCompleted))
  },[level, currentExperience, challengesCompleted])

  function levelUp() {
    setLevel(level + 1);
    setIsLevelModalOpen(true)
  } 

  function closeLevelUpModal() {
    setIsLevelModalOpen(false)
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
      completeChallenge,
      closeLevelUpModal
    }}>
      {children}

      {isLevelModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
};

export function useProvider(): ProviderContextData {
  const context = useContext(ChallengesContext);

  return context;
}