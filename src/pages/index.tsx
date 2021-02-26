import React, { useState } from 'react'
import { useRouter } from 'next/router'
import useSound from 'use-sound'
import { FiGithub, FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from '../contexts/theme';

import turnOnSound from '../../public/sounds/turn-on.mp3';
import turnOffSound from '../../public/sounds/turn-off.mp3';

import { Container, LeftSide, RightSide, TitleContainer } from '../styles/pages'
import Input from '../components/Input';

const Index: React.FC = () => {
  const { push } = useRouter();
  const {theme, ToggleTheme} = useTheme();

  const [username, setUsername]= useState('');

  const [play] = useSound(theme.title === 'dark' ? turnOffSound : turnOnSound)

  function handleClick(){
    ToggleTheme()
    play()
  }

  function handleUsername(e){
    e.preventDefault();
    if(username){
      push(`/${username}`);
    }
  }

  return (
    <Container>
      <section>
        <LeftSide>
          <button type="button" onClick={handleClick}>
            {theme.title === 'light' ? <FiMoon size={30} /> : <FiSun size={30} />}
          </button>
        </LeftSide>
        <RightSide>
          <img src='white-logo-full.svg' alt="Logo"/>

          <div>
            <strong>Bem-vindo</strong>

            <TitleContainer>
              <FiGithub size={55} />
              <span>Faça login com seu Github para começar</span>
            </TitleContainer>

            <form onSubmit={handleUsername}>
              <Input 
                placeholder="Digite seu username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </form>
          </div>
        </RightSide>
      </section>
    </Container>
  )
}

export default Index;