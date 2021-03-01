import { useRouter } from 'next/router';
import { createContext, useCallback, useContext, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

interface IUser{
  // _id: string,
  username: string,
  level: number,
  currentExperience: number,
  challengesCompleted: number,
  name: string
  avatar_url: string
}
interface IUpdateResponse{
  value: IUser
}
interface SessionContextData {
  checkIfUserExists(username: string): Promise<IUser | boolean>;
  createUser(username: string): Promise<IUser>;
  updateUser( username: string, user: IUser): Promise<IUpdateResponse>;
  singIn(username: string): Promise<void>,
  singOut(): void,
  user: IUser
}

export const SessionContext = createContext({} as SessionContextData);

export const SessionProvider: React.FC = ({ children }) => { 
  const route = useRouter();
  const [ user, setUser ] = useState();

  const checkIfUserExists = useCallback( async (username) => {
    try{
      const { data }  = await axios.get(`/api/users/search?username=${username}`);
      
      if(data){
        return data;
      }else{
        return false;
      }
    }catch(err){
      console.log(err)
    }
  }, [])
  
  const createUser = useCallback( async (username) => {
    try{
      const response = await fetch(`https://api.github.com/users/${username}`);
      const userData = await response.json();

      if(userData.name){
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

        return data;
      }else{
        throw new Error("Github username não existe")
      }
    }catch(err){
      console.log(err)
    }
  }, [])

  const updateUser = useCallback( async (username, user) => {
    try{
     const { data } = await axios.put('/api/users/update', {
        username,
        data: user
      })

      return data;
    }catch(err){
      console.log(err)
    }
  }, [])

  const singIn = useCallback( async (username) => {
    const userExists = await checkIfUserExists(username)
    
    if(!userExists){
      const data = await createUser(username)
      
      setUser(data)
      Cookies.set("user", JSON.stringify(data))
      route.push(`/home`);
    }else {
      setUser(userExists)
      Cookies.set("user", JSON.stringify(userExists))
      route.push(`/home`);
    }
  }, [])

  const singOut = useCallback( async () => {
    setUser(null)
    Cookies.set("user", '')
    route.push(`/`);
  }, [])

  return (
    <SessionContext.Provider value={{ 
      checkIfUserExists,
      createUser,
      updateUser,
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