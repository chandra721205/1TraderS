import { useState } from 'react';
import { 
  LayoutDashboard, 
  FileCheck, 
  ArrowLeftRight, 
  FileText, 
  Brain, 
  Settings, 
  Search, 
  Bell, 
  ChevronDown,
  Users,
  DollarSign,
  LogOut,
  Menu,
  MessageCircle,
  Globe
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from './ui/dropdown-menu';
import { DashboardHome } from './screens/DashboardHome';
import { KYCScreen } from './screens/KYCScreen';
import { TransactionCenter } from './screens/TransactionCenter';
import { ReportsAnalytics } from './screens/ReportsAnalytics';
import { AIInsightsCenter } from './screens/AIInsightsCenter';
import { SettingsScreen } from './screens/SettingsScreen';
import { UserStaffManagement } from './screens/UserStaffManagement';
import { FinancialOverview } from './screens/FinancialOverview';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb';

interface DashboardLayoutProps {
  currentRole: string;
  onRoleChange: (role: string) => void;
  onLogout: () => void;
}

export function DashboardLayout({ currentRole, onRoleChange, onLogout }: DashboardLayoutProps) {
  const [activeScreen, setActiveScreen] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [language, setLanguage] = useState('English');
  const [showAIChat, setShowAIChat] = useState(false);

  const roles = ['Producer', 'Trader', 'Agent', 'Buyer', 'Logistics', 'Processor'];

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'kyc', label: 'KYC', icon: FileCheck },
    { id: 'transactions', label: 'Transactions', icon: ArrowLeftRight },
    { id: 'financial', label: 'Financial', icon: DollarSign },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'ai-insights', label: 'AI Insights', icon: Brain },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const getScreenTitle = () => {
    const item = menuItems.find(m => m.id === activeScreen);
    return item?.label || 'Dashboard';
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case 'dashboard':
        return <DashboardHome currentRole={currentRole} />;
      case 'kyc':
        return <KYCScreen />;
      case 'transactions':
        return <TransactionCenter />;
      case 'financial':
        return <FinancialOverview />;
      case 'reports':
        return <ReportsAnalytics currentRole={currentRole} />;
      case 'ai-insights':
        return <AIInsightsCenter />;
      case 'users':
        return <UserStaffManagement />;
      case 'settings':
        return <SettingsScreen />;
      default:
        return <DashboardHome currentRole={currentRole} />;
    }
  };

  return (
    <div className="h-screen flex flex-col" style={{
      background: 'linear-gradient(135deg, #F7FAFC 0%, #D9F2FF 100%)'
    }}>
      {/* Top Bar */}
      <div className="bg-white border-b shadow-sm px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          >
            <Menu className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#D4AF37' }}>
              <span className="text-white text-sm">T</span>
            </div>
            <span className="hidden md:block">TRADIE</span>
          </div>
        </div>

        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input 
              placeholder="Quick search..." 
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <Globe className="w-4 h-4" />
                {language}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setLanguage('English')}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('हिन्दी')}>हिन्दी</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('தமிழ்')}>தமிழ்</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1 px-3" style={{ 
                background: 'rgba(212, 175, 55, 0.1)',
                border: '1px solid #D4AF37'
              }}>
                Role: {currentRole}
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Switch Role</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {roles.map(role => (
                <DropdownMenuItem 
                  key={role}
                  onClick={() => onRoleChange(role)}
                >
                  {role}
                  {role === currentRole && <span className="ml-auto">✓</span>}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <Badge 
              className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs"
              style={{ background: '#D4AF37' }}
            >
              3
            </Badge>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarFallback style={{ background: '#D4AF37', color: 'white' }}>
                    {currentRole[0]}
                  </AvatarFallback>
                </Avatar>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div 
          className={`bg-white border-r shadow-sm transition-all duration-300 ${
            sidebarCollapsed ? 'w-16' : 'w-64'
          }`}
        >
          <nav className="p-2 space-y-1">
            {menuItems.map(item => {
              const Icon = item.icon;
              const isActive = activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveScreen(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                    isActive 
                      ? 'text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  style={isActive ? { background: '#D4AF37' } : {}}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {!sidebarCollapsed && <span className="text-sm">{item.label}</span>}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-6 max-w-7xl mx-auto">
            <div className="mb-6">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink onClick={() => setActiveScreen('dashboard')} className="cursor-pointer">
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{getScreenTitle()}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {renderScreen()}
          </div>
        </div>
      </div>

      {/* AI Assistant Chat Bubble */}
      <Button
        onClick={() => setShowAIChat(!showAIChat)}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg"
        style={{ background: '#D4AF37' }}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {showAIChat && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border flex flex-col">
          <div className="p-4 border-b" style={{ background: '#D4AF37', color: 'white' }}>
            <div className="flex items-center justify-between">
              <span>AI Assistant</span>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowAIChat(false)}
                className="text-white hover:bg-white/20"
              >
                ✕
              </Button>
            </div>
          </div>
          <div className="flex-1 p-4 overflow-auto">
            <div className="text-sm text-gray-500 text-center">
              AI Assistant integration placeholder.
              <br />
              Ready for future implementation.
            </div>
          </div>
          <div className="p-3 border-t">
            <Input placeholder="Type your message..." />
          </div>
        </div>
      )}
    </div>
  );
}
