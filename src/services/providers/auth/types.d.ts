import { ReactNode } from 'react';

export type AuthContextType = {
  isAuthenticated: boolean;
  authUser: (data: AuthDataType) => Promise<void>;
};

export type AuthDataType = {
  email: string;
  password: string;
};

export type TokenDecoded = {
  id: string;
  iat: number;
  exp: number;
  isAuthenticated: boolean;
};

export type AuthProviderType = {
  children: ReactNode;
};

export type AuthUserDTO = {
  token: string;
  refreshToken: {
    userId: string;
    expiresIn: number;
    _id: string;
  };
  user: {
    name: string;
    email: string;
  };
};
