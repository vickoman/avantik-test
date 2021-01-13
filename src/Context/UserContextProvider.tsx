import React, { useState } from 'react';

export const AppContext = React.createContext({} as { [key: string]: any });

const UserContextProvider: React.FC = ({ children }) => {
    const [currentUser, setcurrentUser] = useState<string|null>(null);

    const handleLogin = (user:string) => {
        setcurrentUser(user)
    };

    const handleLogout = () => {
        setcurrentUser(null);
    }

    return (
        <AppContext.Provider
            value={{
                user: currentUser,
                onLogin: handleLogin,
                onLogout: handleLogout
            }}
        >
        {children}
        </AppContext.Provider>
    )
}

export default UserContextProvider;
