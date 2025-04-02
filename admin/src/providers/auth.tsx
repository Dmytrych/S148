'use client'

import {createContext, ReactNode, useCallback, useContext, useEffect, useState} from "react";
import {getCachedToken, getCachedUser, saveJwtInfo} from "@/services/authService";

type UserProfile = {
  id: number,
  username: string,
  email: string,
  provider: string,
  confirmed: boolean,
  blocked: boolean,
  createdAt: Date,
  updatedAt: Date
}

export type AuthContextFields = {
  user: UserProfile | null;
  token: string | null;
}

type AuthContext = AuthContextFields & {
  isReady: boolean;
  update: (values: AuthContextFields) => void;
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}

const AuthContext = createContext<AuthContext>({
  user: null,
  token: null,
  isReady: false,
  update: () => {}
} as AuthContext);

type AuthContextProviderProps = {
  children: ReactNode
}

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [token, setToken] = useState<string | null>(null)
  const [user, setUser] = useState<UserProfile | null>(null)
  const [isReady, setIsReady] = useState<boolean>(false)

  const handleUpdate = useCallback((values: AuthContextFields) => {
    saveJwtInfo(values)

    setToken(values.token)
    setUser(values.user)
  }, [setUser, setToken])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const newToken = getCachedToken()
      const newUser = getCachedUser()

      if (newToken && newUser) {
        handleUpdate( { token: newToken, user: newUser } )
      }
      setIsReady(true)
    }
  }, [])


  return <AuthContext.Provider value={{ token, user, update: handleUpdate, isReady}}>
    {children}
  </AuthContext.Provider>
}

export default AuthContextProvider
