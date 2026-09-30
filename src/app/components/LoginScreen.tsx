import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Smartphone, Mail, Lock } from 'lucide-react';

interface LoginScreenProps {
  onLogin: (role: string) => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [selectedRole, setSelectedRole] = useState('Trader');
  
  const roles = ['Producer', 'Trader', 'Agent', 'Buyer', 'Logistics', 'Processor'];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(selectedRole);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{
      background: 'linear-gradient(135deg, #F7FAFC 0%, #D9F2FF 100%)'
    }}>
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="space-y-2 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#D4AF37' }}>
              <span className="text-white">T</span>
            </div>
            <CardTitle className="text-3xl">TRADIE</CardTitle>
          </div>
          <CardDescription>Commodity Trading Platform</CardDescription>
          <div className="text-xs text-gray-500">💻 Web / Desktop Prototype v1</div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="email">
                <Mail className="w-4 h-4 mr-1" />
                Email
              </TabsTrigger>
              <TabsTrigger value="mobile">
                <Smartphone className="w-4 h-4 mr-1" />
                Mobile
              </TabsTrigger>
              <TabsTrigger value="otp">OTP</TabsTrigger>
            </TabsList>
            
            <TabsContent value="email" className="space-y-4">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
                <div className="space-y-2">
                  <Label>Select Your Role</Label>
                  <select 
                    className="w-full p-2 border rounded-md"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                  >
                    {roles.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>
                <Button type="submit" className="w-full" style={{ background: '#D4AF37' }}>
                  Login
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="mobile" className="space-y-4">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input id="mobile" type="tel" placeholder="+91 98765 43210" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-mobile">Password</Label>
                  <Input id="password-mobile" type="password" placeholder="••••••••" />
                </div>
                <div className="space-y-2">
                  <Label>Select Your Role</Label>
                  <select 
                    className="w-full p-2 border rounded-md"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                  >
                    {roles.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>
                <Button type="submit" className="w-full" style={{ background: '#D4AF37' }}>
                  Login
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="otp" className="space-y-4">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="mobile-otp">Mobile Number</Label>
                  <Input id="mobile-otp" type="tel" placeholder="+91 98765 43210" />
                </div>
                <Button type="button" variant="outline" className="w-full">
                  Send OTP
                </Button>
                <div className="space-y-2">
                  <Label htmlFor="otp">Enter OTP</Label>
                  <Input id="otp" type="text" placeholder="Enter 6-digit OTP" maxLength={6} />
                </div>
                <div className="space-y-2">
                  <Label>Select Your Role</Label>
                  <select 
                    className="w-full p-2 border rounded-md"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                  >
                    {roles.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>
                <Button type="submit" className="w-full" style={{ background: '#D4AF37' }}>
                  Verify & Login
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          
          <div className="mt-4 text-center">
            <Button variant="link" className="text-sm">Forgot Password?</Button>
          </div>
          
          <div className="mt-4 p-3 bg-blue-50 rounded-md text-center">
            <Button variant="outline" size="sm" className="gap-2">
              <Smartphone className="w-4 h-4" />
              Access Mobile View
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
