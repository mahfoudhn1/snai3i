import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../services/auth.service";

interface User {
  username: string;
  password: string;
}

interface AuthState {
  isLoggedIn: boolean;
  token: User | null;
}

const storedToken = localStorage.getItem("token");
const token: User | null = storedToken ? JSON.parse(storedToken) : null;

const initialState: AuthState = token
  ? { isLoggedIn: true, token }
  : { isLoggedIn: false, token: null };

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }: { username: string; password: string }) => {
    try {
      const data = await AuthService.login(username, password);
      
      return { token: data };
    } catch (error) {
      throw new Error("An error occurred during login.");
    }
  }
  
);
export const regitser = createAsyncThunk(
  "auth/signup",
  async ({ username, email , password, password2, first_name, last_name }: { username: string; password: string, email:string,  password2:string, first_name:string, last_name:string }) => {
    try {
      
      const data = await AuthService.register(username, email , password, password2, first_name, last_name);
      
      return { reg: data };
    } catch (error) {
      throw new Error("An error occurred during regestring.");
    }
  }
  
);


export const logout = createAsyncThunk("auth/logout", async () => {
  try{
    
    return AuthService.logout()
  }
  catch{
    throw new Error("An error occurred during logout.");

  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(regitser.fulfilled, (state, action) => {
      state.isLoggedIn = false;
    });
    builder.addCase(regitser.rejected, (state) => {
      state.isLoggedIn = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoggedIn = false;
      state.token = null;
    });
    builder.addCase(logout.fulfilled,(state)=>{
      state.isLoggedIn = false;
      state.token = null;
    })
  },
});

export default authSlice.reducer;