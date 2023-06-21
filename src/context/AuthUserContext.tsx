import React, { createContext, useContext, Dispatch, SetStateAction } from 'react'
import useFirebaseAuth, { AuthUserType, CartType } from '../firebase/useFirebaseAuth';

type AuthUserContextType = { 
  authUser: AuthUserType; 
  loading: boolean; 
  cart: CartType;
  setCart: Dispatch<SetStateAction<CartType>>,
  signInWithEmailAndPassword: (email: string, password: string) => Promise<any>; 
  createUserWithEmailAndPassword: (email: string, password: string) => Promise<any>; 
  signOut: () => {};
};

const authUserContext = createContext<AuthUserContextType>({
  authUser: null,
  loading: true,
  cart: null,
  setCart: () => {},
  signInWithEmailAndPassword: async () => {},
  createUserWithEmailAndPassword: async () => {},
  signOut: async () => {}
});

export const AuthUserProvider: React.FC = ({ children }) => {
  const auth = useFirebaseAuth();
  return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>;
}

export const useAuth = () => useContext(authUserContext);