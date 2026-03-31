import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  userToken: string | null;
  userData: any | null;
}

const initialState: AuthState = {
  userToken: null,
  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSignIn: (state, action: PayloadAction<{ token: string; user: any }>) => {
      state.userToken = action.payload.token;
      state.userData = action.payload.user;
    },
    setSignOut: (state) => {
      state.userToken = null;
      state.userData = null;
    },
  },
});

export const { setSignIn, setSignOut } = authSlice.actions;
export default authSlice.reducer;