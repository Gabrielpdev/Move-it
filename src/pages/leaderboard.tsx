import { GetServerSideProps } from 'next';
import Router from 'next/router';
import Head  from 'next/head'
import React, { useState } from 'react'
import { FiGithub, FiMoon, FiSun } from "react-icons/fi";

import { SideBar } from '../components/SideBar'
import { Container } from '../styles/pages/leaderboard'

const Leaderboard: React.FC = () => {

  const moch = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
  ]
  
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

        <table>
          <thead>
            <tr>
              <th>POSIÇÃO</th>
              <th>USUÁRIO</th>
              <th>DESAFIOS</th>
              <th>EXPERIÊNCIA</th>
            </tr>
          </thead>
          <tr className="separator"/>
          <tbody>
            {moch.map((item, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <th>
                  <img src="https://github.com/gabrielpdev.png" alt="Gabriel"/>
                  <div>
                    <strong>Gabriel Pereira Oliveira</strong>
                    <div>
                      <img src="icons/level.svg" alt="Level"/>
                      <span>Level 40</span>
                    </div>
                  </div>
                </th>
                <th>
                  <span>120</span>
                  {' Completados'}
                </th>
                <th>
                  <span>123000</span>
                  {' xp'}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Container>
  )
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const {user} =  await ctx.req.cookies;

//   if (user) {
//     if(typeof window === 'undefined'){
//       ctx.res.writeHead(302, { Location: '/home' })
//       ctx.res.end()
//     }else{
//       Router.push('/home')
//     }
//     return { props: {} }
//   }else{
//     return { props: {} }
//   };
// }

export default Leaderboard;