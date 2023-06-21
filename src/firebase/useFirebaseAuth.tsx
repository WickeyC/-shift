import { useState, useEffect } from 'react';
import auth from './auth';
import firestore from './firestore';

const formatAuthUser = (user: { uid: string; email: string }) => ({
  uid: user.uid,
  email: user.email,
});

export type AuthUserType = null | {
  uid: string;
  email: string;
};

export type CartType = null | {
  id: string;
  quantity: number;
}[];

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<AuthUserType>(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<CartType>([]);

  const authStateChanged = async (authState: any) => {
    if (!authState) {
      setLoading(false);
      return;
    }

    setLoading(true);

    const formattedUser = formatAuthUser(authState);

    firestore.collection(`/users/${formattedUser.uid}/cart`).get().then((querySnapshot: any) => {
      let cartArr: CartType = [];
      querySnapshot.forEach((doc: any) => {
        cartArr?.push({...doc.data(), id: doc.id});
      });
      setCart(cartArr);
      setAuthUser(formattedUser);
      setLoading(false);
    });        
  };

  const clear = () => {
    setAuthUser(null);
    setLoading(true);
    setCart(null);
  };

  const signInWithEmailAndPassword = (email: string, password: string) =>
    auth.signInWithEmailAndPassword(email, password);

  const createUserWithEmailAndPassword = (email: string, password: string) =>
    auth.createUserWithEmailAndPassword(email, password);

  const signOut = () => auth.signOut().then(clear);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    cart,
    setCart,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
  };
}
