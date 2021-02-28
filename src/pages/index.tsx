import { GetServerSideProps } from 'next';
import Router from 'next/router';
import Head  from 'next/head'
import React, { useState } from 'react'
import useSound from 'use-sound'
import { FiGithub, FiMoon, FiSun } from "react-icons/fi";

import Input from '../components/Input';

import { useTheme } from '../contexts/theme';
import { useSession } from '../contexts/SessionContext';

import turnOffSound from '../../public/sounds/turn-off.mp3';
import turnOnSound from '../../public/sounds/turn-on.mp3';

import { Container, LeftSide, RightSide, TitleContainer } from '../styles/pages'

const Index: React.FC = () => {
  const { singIn } = useSession();
  const {theme, ToggleTheme} = useTheme();

  const [username, setUsername]= useState('');

  const [play] = useSound(theme.title === 'dark' ? turnOffSound : turnOnSound)

  function handleClick(){
    ToggleTheme()
    play()
  }

  async function handleUsername(e){
    e.preventDefault();
    if(username){
      await singIn(username)
      Router.push(`/home`);
    }
  }

  return (
    <Container>
      <Head>
        <title>Início | Move YourSelf</title>
      </Head>
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {user} =  await ctx.req.cookies;

  if (user) {
    if(typeof window === 'undefined'){
      ctx.res.writeHead(302, { Location: '/home' })
      ctx.res.end()
    }else{
      Router.push('/home')
    }
  }else{
    return { props: null }
  };
}

export default Index;