import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkSession = async () => {
            try {
                const response = await axios.post(
                    'http://localhost/signedin.php',
                    {},
                    { withCredentials: true }
                );
                if (response.data.signedIn) {
                    setUser(response.data.user);
                }else if (response.data.signedIn === false) {
                    console.log('no user session');
                }else {
                    console.log("Unexpected response:", response.data);
                }
            } catch (err) {
                console.error('Session check failed:', err);
            }
        };

        checkSession();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};