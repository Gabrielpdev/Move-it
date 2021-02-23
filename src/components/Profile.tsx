import { Container } from '../styles/components/Profile'

export const Profile: React.FC = () => {

  return (
    <Container>
      <img src="https://github.com/gabrielpdev.png" alt="Gabriel Pereira"/>
      
      <div>
        <strong>Gabriel Pereira</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </Container>
  )
}
