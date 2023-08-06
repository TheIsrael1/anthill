import { StateCreator } from 'zustand';
import { authDetailsInterface, planTypes } from 'types';


export type AuthStateType = {
    authLoading: boolean;
    loggedIn: boolean;
    plan: planTypes;
    setLoggedIn: (arg: boolean) => void;
    setPlan: (arg: planTypes) => void;
    setAuthLoading: (arg: boolean) => void;
    authDetails: authDetailsInterface
    setAuthDetails: (arg: authDetailsInterface) => void
}


const authSlice: StateCreator<AuthStateType, [['zustand/devtools', never]], []> = (set,  ) => ({
authLoading: true,
loggedIn: true,
plan: 'professional',
setAuthLoading: (arg) => {
    set({ authLoading: arg });
  },
  setLoggedIn: (arg) => {
    set({ loggedIn: arg });
  },
  setPlan: (arg) => {
    set({ plan: arg });
  },
  authDetails: {
  },
  setAuthDetails: (arg) =>{
    set({authDetails: arg})
  }
})

export default authSlice;
