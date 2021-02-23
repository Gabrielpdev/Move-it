import React from 'react'
import Head  from 'next/head'

import { ExperienceBar } from '../components/ExperienceBar'
import { SideBar } from '../components/SideBar'
import { Profile } from '../components/Profile'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { CountDown } from '../components/CountDown'

import { Container, LeftSide, RightSide } from '../styles/pages'

const Home: React.FC = () => {

  return (
    <Container>
      <Head>
        <title>Início | Move YourSelf</title>
      </Head>
      <SideBar />
      <ExperienceBar />

      <section>
        <LeftSide>
          <Profile />
          <CompletedChallenges />
          <CountDown />
        </LeftSide>
        
        <RightSide>

        </RightSide>
      </section>
    </Container>
  )
}

export default Home;