import React from 'react'
import Head  from 'next/head'
import { GetServerSideProps } from 'next';

import { ExperienceBar } from '../components/ExperienceBar'
import { SideBar } from '../components/SideBar'
import Profile from '../components/Profile'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { CountDown } from '../components/CountDown'

import { Container, LeftSide, RightSide } from '../styles/pages/home'
import { ChallengeBox } from '../components/ChallengeBox'
import { CountDownProvider } from '../contexts/CountDownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface IUserGithub {
  name: string
  avatar_url: string
}
interface IProps {
  user: IUserGithub
  level: number
  currentExperience: number 
  challengesCompleted: number
}

const Home: React.FC<IProps> = (props) => {
  const { user } = props;

  return (
    <ChallengesProvider {...props}>
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
    </ChallengesProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { username } = ctx.params;
  const response = await fetch(`https://api.github.com/users/${username}`);
  const user = await response.json();

  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;

  return {
    props: { 
      user, 
      level: Number(level), 
      currentExperience: Number(currentExperience), 
      challengesCompleted: Number(challengesCompleted),
    }
  }
}

export default Home;