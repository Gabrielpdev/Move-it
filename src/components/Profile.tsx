import Link from 'next/link';
import { Container } from '../styles/components/Profile'
import { FiLogOut } from "react-icons/fi";
import { useProvider } from '../contexts/ChallengesContext';
import { useSession } from '../contexts/SessionContext';

interface IUserGithub {
  name: string
  avatar_url: string
}

export default function Profile(user: IUserGithub)  {
  const { level } = useProvider();
  const { singOut } = useSession();

  return (
    <Container>
      <img src={user?.avatar_url} alt={user?.name}/>
      
      <div>
        <strong>{user?.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
      
      <button type='button' onClick={() => singOut()}>
        <FiLogOut size={40} />  
      </button>
    </Container>
  )
}
