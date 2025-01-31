import { createContext } from "react";

interface AuthContextData {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextData | undefined>(undefined);