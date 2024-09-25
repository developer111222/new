// src/services/authService.js  
import axios from 'axios';  

const API_URL = 'https://blog-backend-enqb.onrender.com/api/auth';  

const loginWithGoogle = () => {  
    window.open(`${API_URL}/google`, '_self');  
};  

const getCurrentUser = async () => {  
    const response = await axios.get(`${API_URL}/me`, { withCredentials: true });  
    return response.data;  
};  

export { loginWithGoogle, getCurrentUser };
