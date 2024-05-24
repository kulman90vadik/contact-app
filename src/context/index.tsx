
import {Dispatch, ReactNode, SetStateAction, createContext, useState} from 'react'
import { usersType } from '../type/usersType'


interface IMenuContext {
  newPerson: usersType,
  setNewPerson: Dispatch<SetStateAction<usersType>>
}

export const Context = createContext<IMenuContext>({
  newPerson: {"id": 0,  "star": false, "email":"", "name": "", "phone": '', "avatar": ""},
  setNewPerson: () => {},
})


export const SetProvider = ({children}: {children: ReactNode }) => {
  const[newPerson, setNewPerson] = useState<usersType>({"id": 0,  "star": false, "email":"", "name": "", "phone": '', "avatar": ""});
  return (
    <Context.Provider value={{newPerson, setNewPerson}}>
        {children}
    </Context.Provider>
  )
}