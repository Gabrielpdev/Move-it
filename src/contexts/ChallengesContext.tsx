import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import useSound from 'use-sound';
import challenges from '../../challenges.json';
import Cookies from 'js-cookie';

import notifications from '../../public/sounds/notification.mp3';
import LevelUpModal from '../components/LevelUpModal';
import { useSession } from './SessionContext';
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
interface ChallengesProviderProps {
  children: ReactNode
  username: string,
  level: number,
  currentExperience: number,
  challengesCompleted: number,
  name: string
  avatar_url: string
}

export const ChallengesContext = createContext({} as ProviderContextData);

export const ChallengesProvider: React.FC = ({ children, ...rest }: ChallengesProviderProps) => {
  const { user, updateUser } = useSession();
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
    const formattedUser = {
      level,
      currentExperience,
      challengesCompleted,
      username: rest?.username || '',
      name: rest?.name || '',
      avatar_url: rest?.avatar_url || '',
    }

    if(rest.username){
      updateUser( rest.username ,formattedUser ).then(({ value }) => {
        Cookies.set("user", JSON.stringify(value))
      })
    }

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