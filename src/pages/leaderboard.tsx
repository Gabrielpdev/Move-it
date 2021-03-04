import Head  from 'next/head'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { SideBar } from '../components/SideBar'
import { Loading } from '../components/Loading'
import { Container } from '../styles/pages/leaderboard'

const Leaderboard: React.FC = () => {

  const [ loading , setLoading] = useState(false);
  const [ users , setUsers] = useState([]);

  useEffect(() => {
    setLoading(true)
    axios.get('/api/users/all').then(({ data }) => {
      setUsers( data )
      setLoading(false)
    })
  },[])

  return (
    <Container>
      <Head>
        <title>Leaderboard | Move YourSelf</title>
      </Head>
      <SideBar />
      <section>
        <h2>
          Leaderboard
        </h2>

        {loading ? <Loading /> : (
          <table>
            <thead>
              <tr>
                <th>POSIÇÃO</th>
                <th>USUÁRIO</th>
                <th>DESAFIOS</th>
                <th>EXPERIÊNCIA ATUAl</th>
              </tr>
            </thead>
            <tr className="separator"/>
            <tbody>
              {users.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <th>
                    <img src={item.avatar_url} alt={item.name}/>
                    <div>
                      <strong>{item.name}</strong>
                      <div>
                        <img src="icons/level.svg" alt="Level"/>
                        <span>Level {item.level}</span>
                      </div>
                    </div>
                  </th>
                  <th>
                    <span>{item.challengesCompleted}</span>
                    {' Completados'}
                  </th>
                  <th>
                    <span>{item.currentExperience}</span>
                    {' xp'}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </Container>
  )
}

export default Leaderboard;