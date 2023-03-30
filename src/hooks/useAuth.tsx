import React, { createContext, useState, useContext } from 'react'
import { IChildren } from '../utils/children.utils'

interface IAuthContext {
  logged: boolean
  signIn(email: string, password: string): void
  signOut(): void
}

const AuthContext = createContext<IAuthContext>({
  logged: false,
  signIn: () => {},
  signOut: () => {},
})

export const AuthProvider: React.FunctionComponent<IChildren> = ({
  children,
}) => {
  const [logged, setLogged] = useState<boolean>(
    !!localStorage.getItem('@financeboard:logged')
  )

  const signIn = (email: string, password: string) => {
    if (email === 'admin@email.com' && password === '1234') {
      localStorage.setItem('@financeboard:logged', 'true')
      setLogged(true)
    } else {
      alert('Senha ou usuário inválidos!')
    }
  }

  const signOut = () => {
    localStorage.removeItem('@financeboard:logged')
    setLogged(false)
  }

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext)

  return context
}
