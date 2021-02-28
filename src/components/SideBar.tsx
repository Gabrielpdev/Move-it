import React from 'react'
import useSound from 'use-sound'
import Link from 'next/link';

import { FiSun, FiMoon, FiHome, FiAward } from "react-icons/fi";

import { useTheme } from '../contexts/theme';
import { Container } from '../styles/components/SideBar'

import turnOnSound from '../../public/sounds/turn-on.mp3';
import turnOffSound from '../../public/sounds/turn-off.mp3';

export const SideBar: React.FC = () => {
  const { ToggleTheme, theme } = useTheme();
  const [play] = useSound(theme.title === 'dark' ? turnOffSound : turnOnSound)

  function handleClick(){
    ToggleTheme()
    play()
  }

  return (
    <Container>
      <svg width="48" height="42" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.2415 0H32.6816L23.9964 42H13.5563L22.2415 0Z"/>
        <path d="M37.56 0H48L41.2331 32.9078H30.7905L37.56 0Z" />
        <path d="M6.76946 0H17.2095L10.4425 32.9078H0L6.76946 0Z" />
      </svg>

      
      <div>
        <Link href={'/home'}>
          <a>
            <FiHome size={30} />
          </a>
        </Link>
        <Link href={'/leaderboard'}>
          <a>
            <FiAward size={30} />
          </a>
        </Link>
      </div>
      
      <button type="button" onClick={handleClick}>
        {theme.title === 'light' ? <FiMoon size={30} /> : <FiSun size={30} />}
      </button>
    </Container>
  )
}
