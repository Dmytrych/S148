export type LoginRequest = {
  identifier: string;
  password: string;
}

export type LoginResponse = {
  jwt: string;
  user: UserProfileDto
}

type UserProfileDto = {
  id: number,
  username: string,
  email: string,
  provider: string,
  confirmed: boolean,
  blocked: boolean,
  createdAt: Date,
  updatedAt: Date
}