import { useProvider } from '../contexts/ChallengesContext'
import { Container } from '../styles/components/CompletedChallenges'

export const CompletedChallenges: React.FC = () => {

  const { challengesCompleted } = useProvider();

  return (
    <Container>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  )
}
