import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

interface AuthContextType {
    isAuthenticated: boolean;
    user: any;
    login: (email: string, password: string) => Promise<void>;
    signup: (username: string, email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            fetchUserProfile(token);
        }
    }, []);

    const fetchUserProfile = async (token: string) => {
        try {
            const response = await axios.get('http://localhost:3000/api/auth/profile', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUser(response.data);
        } catch (error) {
            console.error('Error fetching profile:', error);
            logout();
        }
    };

    const login = async (email: string, password: string) => {
        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', {
                email,
                password
            });
            localStorage.setItem('token', response.data.token);
            setIsAuthenticated(true);
            setUser(response.data.user);
        } catch (error) {
            throw error;
        }
    };

    const signup = async (username: string, email: string, password: string) => {
        try {
            await axios.post('http://localhost:3000/api/auth/signup', {
                username,
                email,
                password
            });
        } catch (error) {
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};