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
            localStorage.setItem("user", JSON.stringify(respense.data))
        }
        
        return respense.data;
    })
}
const AuthService = {
    login,

  }
  
  export default AuthService;