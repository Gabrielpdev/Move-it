import React, { useEffect } from 'react'
import Head  from 'next/head'
import { GetServerSideProps } from 'next';

import { ExperienceBar } from '../components/ExperienceBar'
import { SideBar } from '../components/SideBar'
import Profile from '../components/Profile'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { CountDown } from '../components/CountDown'

import { ChallengeBox } from '../components/ChallengeBox'
import { CountDownProvider } from '../contexts/CountDownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { useSession } from '../contexts/SessionContext';

import { Container, LeftSide, RightSide } from '../styles/pages/home'

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
  const { user } = useSession();

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
  const {user} =  await ctx.req.cookies;
  const userFormatted = JSON.parse(user)

  return {
    props: {
      level: Number(userFormatted.level), 
      currentExperience: Number(userFormatted.currentExperience), 
      challengesCompleted: Number(userFormatted.challengesCompleted),
    }
  }
}

export default Home;