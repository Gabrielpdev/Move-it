import { Container } from '../styles/components/Loading'

export function Loading()  {
const moch = [1,2,3,4,5,6]

  return (
    <Container>
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
          {moch.map((item, index) => (
            <tr key={index}>
              <th></th>
              <th>
                <div/>
                <div>
                  <strong></strong>
                  
                </div>
              </th>
              <th>
                <span></span>
              </th>
              <th>
                <span></span>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
