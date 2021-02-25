import React from 'react'
import Head  from 'next/head'
import Router from 'next/router';
import { GetServerSideProps } from 'next';

import { ExperienceBar } from '../components/ExperienceBar'
import { SideBar } from '../components/SideBar'
import Profile from '../components/Profile'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { CountDown } from '../components/CountDown'

import { Container, LeftSide, RightSide } from '../styles/pages/home'
import { ChallengeBox } from '../components/ChallengeBox'
import { CountDownProvider } from '../contexts/CountDownContext';

interface IUserGithub {
  name: string
  avatar_url: string
}

const Home: React.FC<IUserGithub> = (user) => {
  return (
    <Container>
      <Head>
        <title>Início | Move YourSelf</title>
      </Head>
      <SideBar />
      <ExperienceBar />
    
      <CountDownProvider>
        <section>
          <LeftSide>
            <Profile {...user} />
            <CompletedChallenges />
            <CountDown />
          </LeftSide>
          
          <RightSide>
            <ChallengeBox />
          </RightSide>
        </section>
      </CountDownProvider>
    </Container>
  )
}


export const getServerSideProps: GetServerSideProps<IUserGithub> = async ({ params }) => {
  const { username } = params;
  const response = await fetch(`https://api.github.com/users/${username}`);
  const user = await response.json();
  return {
    props: user
  }
}

export default Home;