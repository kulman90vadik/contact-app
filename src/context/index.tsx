
import {Dispatch, ReactNode, SetStateAction, createContext, useState} from 'react'

interface IMenuContext {
  isAuth: boolean,
  setIsAuth: Dispatch<SetStateAction<boolean>>
}

export const Context = createContext<IMenuContext>({
  isAuth: false,
  setIsAuth: () => {},
})

export const AuthProvider = ({children}: {children: ReactNode }) => {
  const[isAuth, setIsAuth] = useState(false);
  return (
    <Context.Provider value={{isAuth, setIsAuth}}>
        {children}
    </Context.Provider>
  )
}