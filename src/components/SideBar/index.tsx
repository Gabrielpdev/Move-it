import React from 'react'
import { FiSun, FiMoon } from "react-icons/fi";

import { useTheme } from '../../hooks';
import { Container } from '../../styles/components/SideBar'

export const SideBar: React.FC = () => {
  const { ToggleTheme, theme } = useTheme();

  return (
    <Container>
      <img src="" alt=""/>
      
      <div>
        <button type="button" onClick={() => {}}>
          <FiSun size={30} />
        </button>
        <button type="button" onClick={() => {}}>
          <FiMoon size={30} />
        </button>
      </div>
      
      <button type="button" onClick={() => ToggleTheme()}>
        {theme.title === 'light' ? <FiMoon size={30} /> : <FiSun size={30} />}
      </button>
    </Container>
  )
}
