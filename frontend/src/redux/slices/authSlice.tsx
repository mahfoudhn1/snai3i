import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../services/auth.service";

interface User {
  username: string;
  password: string;
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
}

const storedUser = localStorage.getItem("user");
const user: User | null = storedUser ? JSON.parse(storedUser) : null;

const initialState: AuthState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }: { username: string; password: string }) => {
    try {
      const data = await AuthService.login(username, password);
      
      return { user: data };
    } catch (error) {
      throw new Error("An error occurred during login.");
    }
  }
  
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoggedIn = false;
      state.user = null;
    });
  },
});

export default authSlice.reducer;