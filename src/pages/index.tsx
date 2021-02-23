import React from 'react'

import { ExperienceBar } from '../components/ExperienceBar'
import { SideBar } from '../components/SideBar'

import { Container } from '../styles/pages'

const Home: React.FC = (props) => {

  return (
    <Container>
      <SideBar />
      <ExperienceBar />
    </Container>
  )
}

export default Home;