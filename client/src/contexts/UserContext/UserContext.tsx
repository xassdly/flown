import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { UserModel } from "./../../models/UserModel";
import { defaultUser } from "./defaultUser";

type UserContextType = {
    user: UserModel | null;
    setUser: (user: UserModel | null) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserModel | null>(defaultUser);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error('useUser must be used within a UserProvider');
    return context;
};
