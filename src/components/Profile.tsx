import { useRouter } from 'next/router'
import { Container } from '../styles/components/Profile'
import { FiLogOut } from "react-icons/fi";
import { useSession } from '../contexts/SessionContext';

interface IUserGithub {
  name: string
  level: number
  avatar_url: string
}

export default function Profile(user: IUserGithub)  {
  const { singOut } = useSession();
  const { push } = useRouter();

  async function handleSignout(){
    await singOut()
    push(`/`);
  }

  return (
    <Container>
      <img src={user?.avatar_url} alt={user?.name}/>
      
      <div>
        <strong>{user?.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {user?.level}
        </p>
      </div>
      
      <button type='button' onClick={handleSignout}>
        <FiLogOut size={40} />  
      </button>
    </Container>
  )
}
