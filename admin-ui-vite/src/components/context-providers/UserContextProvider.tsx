import {ReactNode, useState} from "react";
import {UserContext} from "../../context/user-context.tsx";
import {UserProfileDto} from "../../api/DTO/login.ts";

type UserContextProps = {
  children: ReactNode;
}

export function UserContextProvider({ children }: UserContextProps) {
  const [user, setUser] = useState<UserProfileDto>({} as UserProfileDto);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
