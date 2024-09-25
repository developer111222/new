// src/Profile.js  
import React, { useEffect, useState } from 'react';  
import { getCurrentUser } from './services/authService';  

const Profile = () => {  
    const [user, setUser] = useState(null);  

    useEffect(() => {  
        const fetchUser = async () => {  
            try {  
                const userData = await getCurrentUser();  
                setUser(userData);  
            } catch (error) {  
                console.error('Failed to fetch user', error);  
            }  
        };  
        
        fetchUser();  
    }, []);  

    if (!user) {  
        return <div>Loading...</div>;  
    }  

    return (  
        <div>  
            <h1>Profile</h1>  
            <img src={user.picture} alt={user.displayName} />  
            <h2>{user.displayName}</h2>  
            <p>{user.email}</p>  
        </div>  
    );  
};  

export default Profile;