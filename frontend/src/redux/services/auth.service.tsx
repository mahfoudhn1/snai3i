import axios from "axios";


interface LoginResponse {
    username: string;
    password:string;
  }

const API_URL = "http://127.0.0.1:8000/"

const login = (username: string, password: string): Promise<LoginResponse>=>{
    
    return axios.post<LoginResponse>(API_URL + 'login/',{
        username,
        password
    }).then((respense )=>{
        
        if(respense.data){
            localStorage.setItem("token", JSON.stringify(respense.data))
        }
        
        return respense.data;
    })
}

const logout = ()=>{
    return localStorage.removeItem("token")

    
}

const getUser =()=>{
    const userData = localStorage.getItem("token");
    if (userData !== null) {
        return JSON.parse(userData);
    } else {
        return null; 
    }
}
const AuthService = {
    login,
    logout,
    getUser,
  }
  
  export default AuthService;