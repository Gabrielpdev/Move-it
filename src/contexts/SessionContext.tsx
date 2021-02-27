import { createContext, useCallback, useContext, useState } from 'react';
import axios from 'axios';

interface SessionContextData {
  singIn(username: string): Promise<void>,
  singOut(): void,
  user: {
    username: string,
    level: number,
    currentExperience: number,
    challengesCompleted: number,
    name: string
    avatar_url: string
  }
}

export const SessionContext = createContext({} as SessionContextData);

export const SessionProvider: React.FC = ({ children }) => { 
  const [ user, setUser ] = useState();

  const singIn = useCallback( async (username) => {
    try{
      const { data }  = await axios.post('/api/users/search', { username });
      
      setUser(data)
     
    }catch(err){
      if(err.response.status === 400){
        const response = await fetch(`https://api.github.com/users/${username}`);
        const userData = await response.json();
    
        const { data } = await axios.post('/api/users/create', { 
          data: {
            username,
            name: userData.name,
            avatar_url: userData.avatar_url,
            level: 1,
            currentExperience: 0,
            challengesCompleted: 0,
          }  
        })
        
        setUser(data)
        
      } else {
        console.log(err)
      }
    }
  }, [])

  const singOut = useCallback( async () => {
    setUser(null)
  }, [])

  return (
    <SessionContext.Provider value={{ 
      singIn,
      singOut,
      user
    }}>
      {children}
    </SessionContext.Provider>
  );
};

export function useSession(): SessionContextData {
  const context = useContext(SessionContext);

  return context;
}