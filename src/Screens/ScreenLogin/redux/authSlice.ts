import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginFormData } from '../utils/types';
interface AuthState {
  isAuthenticated: boolean;
  user: LoginFormData | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<LoginFormData | null>) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
  },
});



export const { setUser } = authSlice.actions;


export default authSlice.reducer;