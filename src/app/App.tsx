import { useState } from 'react';
import { RoleProvider } from './contexts/RoleContext';
import { LoginScreen } from './components/LoginScreen';
import { DashboardLayout } from './components/DashboardLayout';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentRole, setCurrentRole] = useState('Trader');

  const handleLogin = (role: string) => {
    setCurrentRole(role);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleRoleChange = (role: string) => {
    setCurrentRole(role);
  };

  return (
    <RoleProvider>
      <div className="size-full">
        {!isAuthenticated ? (
          <LoginScreen onLogin={handleLogin} />
        ) : (
          <DashboardLayout
            currentRole={currentRole}
            onRoleChange={handleRoleChange}
            onLogout={handleLogout}
          />
        )}
      </div>
    </RoleProvider>
  );
}
