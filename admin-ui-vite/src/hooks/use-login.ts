import {getToken} from "../api/login.ts";
import {useContext} from "react";
import {UserContext} from "../context/user-context.tsx";

export const LOCAL_STORAGE_JWT_KEY = "jwt";
export const LOCAL_STORAGE_USER_DATA_KEY = "user";

export function useLogin() {
  const { setUser } = useContext(UserContext)

  const handleLogin = async (identifier: string, password: string) => {
    const tokenResponse = await getToken({identifier, password});
    localStorage.setItem(LOCAL_STORAGE_JWT_KEY, tokenResponse.data.jwt)
    localStorage.setItem(LOCAL_STORAGE_USER_DATA_KEY, JSON.stringify(tokenResponse.data.user))
    setUser(tokenResponse.data.user)
    return tokenResponse
  }

  return {
    handleLogin
  }
}
