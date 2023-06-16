import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import authSlice, { AuthStateType } from './auth';


export type StoreType = AuthStateType


const useStore = create<StoreType>()(
    devtools((...a) => ({
      ...authSlice(...a),
    })),
  );
  

  export default useStore;
