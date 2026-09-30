import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'Producer' | 'Trader' | 'Agent' | 'Buyer' | 'Processor' | 'Logistics';

interface RoleContextType {
  currentRole: UserRole;
  setCurrentRole: (role: UserRole) => void;
  availableRoles: UserRole[];
  userName: string;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};

interface RoleProviderProps {
  children: ReactNode;
}

export const RoleProvider: React.FC<RoleProviderProps> = ({ children }) => {
  const [currentRole, setCurrentRole] = useState<UserRole>('Trader');
  const availableRoles: UserRole[] = ['Producer', 'Trader', 'Agent', 'Buyer', 'Processor', 'Logistics'];
  const userName = 'Rajesh Kumar';

  return (
    <RoleContext.Provider value={{ currentRole, setCurrentRole, availableRoles, userName }}>
      {children}
    </RoleContext.Provider>
  );
};
