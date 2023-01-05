export type UserType = {
  id: string;
  name?: string;
  email?: string;
};
export type UserContextType = {
  user: UserType | null;
  setUser: (param: UserType) => void;
  getUserData: (token: string) => Promise<void>;
};
export type UserProviderType = {
  children: ReactNode;
};
