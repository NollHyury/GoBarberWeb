import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface AuthContextData {
  name: string;
  singIn(credentials: Credentials): Promise<void>;
}

interface Credentials {
  email: string;
  password: string;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const singIn = useCallback(async ({ email, password }: Credentials) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Diego', singIn }}>
      {children}
    </AuthContext.Provider>
  );
};
