import {createContext} from "react";
import {UserProfileDto} from "../api/DTO/login.ts";

export type UserContextType = {
  user: UserProfileDto
  setUser: (user: UserProfileDto) => void
}

export const UserContext = createContext<UserContextType>({
  user: {} as UserProfileDto,
  setUser: () => {}
})
