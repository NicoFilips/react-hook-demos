import React, { createContext, useContext, useState, ReactNode } from "react";

// Benutzerinformationen-Typen
type User = { name: string; age: number };
type UserContextType = {
  user: User;
  updateUser: (newUser: User) => void;
};

// Kontext erstellen
const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider-Komponente
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>({ name: "John Doe", age: 25 });

  const updateUser = (newUser: User) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
