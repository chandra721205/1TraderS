import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import {
  Settings,
  User,
  Bell,
  Shield,
  CreditCard,
  Globe,
  Smartphone,
  Mail,
  CheckCircle,
  Crown,
} from 'lucide-react';

export const SettingsScreen: React.FC = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    push: false,
    transactions: true,
    priceAlerts: true,
    marketing: false,
  });

  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl flex items-center">
            <Settings className="w-8 h-8 mr-3 text-gray-600" />
            Settings
          </h2>
          <p className="text-gray-600 mt-1">Manage your account preferences and settings</p>
        </div>
      </div>

      {/* Settings Tabs */}
      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>

        {/* Profile Settings */}
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                Profile Information
              </CardTitle>
              <CardDescription>Update your personal and contact information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-2xl">
                    RK
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      Change Photo
                    </Button>
                    <p className="text-xs text-gray-500 mt-1">
                      JPG, PNG or GIF (max. 2MB)
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Rajesh" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Kumar" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="rajesh@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+91 98765 43210" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Input
                      id="bio"
                      defaultValue="Commodity trader specializing in grain and pulses"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" defaultValue="Rajesh Agro Traders" />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue="Bangalore, Karnataka" />
                  </div>
                </div>

                <div className="flex justify-end space-x-2 pt-4">
                  <Button variant="outline">Cancel</Button>
                  <Button className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F]">
                    Save Changes
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Subscription Settings */}
        <TabsContent value="subscription" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="w-5 h-5 mr-2" />
                Subscription Plan
              </CardTitle>
              <CardDescription>Manage your subscription and billing</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Current Plan */}
              <div className="p-6 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-lg text-white mb-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Crown className="w-6 h-6" />
                      <h3 className="text-2xl">Professional Plan</h3>
                    </div>
                    <p className="text-sm opacity-90">Active until Nov 23, 2025</p>
                  </div>
                  <Badge className="bg-white text-[#D4AF37]">Active</Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div>
                    <p className="text-sm opacity-90">Monthly Cost</p>
                    <p className="text-xl">₹2,499</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-90">Staff Limit</p>
                    <p className="text-xl">30 Users</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-90">AI Insights</p>
                    <p className="text-xl">Unlimited</p>
                  </div>
                </div>
              </div>

              {/* Plan Features */}
              <div className="space-y-3 mb-6">
                <h4 className="font-medium">Plan Features</h4>
                {[
                  'Unlimited transactions',
                  'AI-powered insights',
                  'Up to 30 staff members',
                  'Priority support',
                  'Advanced analytics',
                  'Multi-role access',
                  'Bill discounting',
                  'Insurance integration',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <Button variant="outline">Upgrade Plan</Button>
                <Button variant="outline" className="text-red-600">
                  Cancel Subscription
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="font-medium">•••• •••• •••• 4242</p>
                      <p className="text-sm text-gray-600">Expires 12/25</p>
                    </div>
                  </div>
                  <Badge>Default</Badge>
                </div>
                <Button variant="outline" className="w-full">
                  Add Payment Method
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Notification Preferences
              </CardTitle>
              <CardDescription>Choose how you want to receive notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Notification Channels */}
                <div>
                  <h4 className="font-medium mb-4">Notification Channels</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-gray-600" />
                        <div>
                          <p className="font-medium">Email Notifications</p>
                          <p className="text-sm text-gray-600">Receive updates via email</p>
                        </div>
                      </div>
                      <Switch
                        checked={notifications.email}
                        onCheckedChange={(checked) =>
                          setNotifications({ ...notifications, email: checked })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Smartphone className="w-5 h-5 text-gray-600" />
                        <div>
                          <p className="font-medium">SMS Notifications</p>
                          <p className="text-sm text-gray-600">Receive updates via SMS</p>
                        </div>
                      </div>
                      <Switch
                        checked={notifications.sms}
                        onCheckedChange={(checked) =>
                          setNotifications({ ...notifications, sms: checked })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Bell className="w-5 h-5 text-gray-600" />
                        <div>
                          <p className="font-medium">Push Notifications</p>
                          <p className="text-sm text-gray-600">Receive push notifications</p>
                        </div>
                      </div>
                      <Switch
                        checked={notifications.push}
                        onCheckedChange={(checked) =>
                          setNotifications({ ...notifications, push: checked })
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Notification Types */}
                <div>
                  <h4 className="font-medium mb-4">Notification Types</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Transaction Updates</p>
                        <p className="text-sm text-gray-600">
                          Get notified about transaction status changes
                        </p>
                      </div>
                      <Switch
                        checked={notifications.transactions}
                        onCheckedChange={(checked) =>
                          setNotifications({ ...notifications, transactions: checked })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Price Alerts</p>
                        <p className="text-sm text-gray-600">
                          Receive alerts for commodity price changes
                        </p>
                      </div>
                      <Switch
                        checked={notifications.priceAlerts}
                        onCheckedChange={(checked) =>
                          setNotifications({ ...notifications, priceAlerts: checked })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Marketing Communications</p>
                        <p className="text-sm text-gray-600">
                          Promotional offers and updates
                        </p>
                      </div>
                      <Switch
                        checked={notifications.marketing}
                        onCheckedChange={(checked) =>
                          setNotifications({ ...notifications, marketing: checked })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <Button className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F]">
                    Save Preferences
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Security Settings
              </CardTitle>
              <CardDescription>Manage your account security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Password */}
              <div>
                <h4 className="font-medium mb-4">Password</h4>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button variant="outline">Change Password</Button>
                </div>
              </div>

              {/* Two-Factor Authentication */}
              <div>
                <h4 className="font-medium mb-4">Two-Factor Authentication (2FA)</h4>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Enable 2FA</p>
                    <p className="text-sm text-gray-600">
                      Add an extra layer of security with OTP + biometric
                    </p>
                  </div>
                  <Switch
                    checked={twoFactorEnabled}
                    onCheckedChange={setTwoFactorEnabled}
                  />
                </div>
                {twoFactorEnabled && (
                  <div className="mt-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-900">
                      2FA is enabled. You'll be prompted for verification on login.
                    </p>
                  </div>
                )}
              </div>

              {/* Active Sessions */}
              <div>
                <h4 className="font-medium mb-4">Active Sessions</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Chrome on Windows</p>
                      <p className="text-sm text-gray-600">Bangalore, India • Active now</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Current</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Mobile App on Android</p>
                      <p className="text-sm text-gray-600">Mumbai, India • 2 hours ago</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Revoke
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Preferences */}
        <TabsContent value="preferences" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Preferences
              </CardTitle>
              <CardDescription>Customize your experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Language */}
              <div>
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="english">
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="hindi">हिन्दी (Hindi)</SelectItem>
                    <SelectItem value="tamil">தமிழ் (Tamil)</SelectItem>
                    <SelectItem value="telugu">తెలుగు (Telugu)</SelectItem>
                    <SelectItem value="kannada">ಕನ್ನಡ (Kannada)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Currency */}
              <div>
                <Label htmlFor="currency">Currency</Label>
                <Select defaultValue="inr">
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inr">₹ INR (Indian Rupee)</SelectItem>
                    <SelectItem value="usd">$ USD (US Dollar)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Timezone */}
              <div>
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="ist">
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ist">IST (Indian Standard Time)</SelectItem>
                    <SelectItem value="utc">UTC (Coordinated Universal Time)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date Format */}
              <div>
                <Label htmlFor="dateFormat">Date Format</Label>
                <Select defaultValue="dd-mm-yyyy">
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dd-mm-yyyy">DD-MM-YYYY</SelectItem>
                    <SelectItem value="mm-dd-yyyy">MM-DD-YYYY</SelectItem>
                    <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-end pt-4">
                <Button className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F]">
                  Save Preferences
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
