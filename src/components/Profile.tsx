import Link from 'next/link';
import { Container } from '../styles/components/Profile'
import { FiLogOut } from "react-icons/fi";

interface IUserGithub {
  name: string
  avatar_url: string
}

export default function Profile(user: IUserGithub)  {
  return (
    <Container>
      <img src={user?.avatar_url} alt={user?.name}/>
      
      <div>
        <strong>{user?.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
      
      <Link href='/'>
        <FiLogOut size={40} />  
      </Link>
    </Container>
  )
}
