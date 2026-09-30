import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Switch } from '../ui/switch';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Users, UserPlus, Mail, Smartphone, Shield, Pencil, Trash2, CheckCircle } from 'lucide-react';

interface StaffMember {
  id: string;
  name: string;
  email: string;
  phone: string;
  roles: string[];
  controlPercentage: number;
  status: 'active' | 'pending' | 'inactive';
  permissions: {
    canTrade: boolean;
    canViewFinancials: boolean;
    canManageStaff: boolean;
    canApproveTransactions: boolean;
  };
}

export const UserStaffManagement: React.FC = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [staffMembers, setStaffMembers] = useState<StaffMember[]>([
    {
      id: '1',
      name: 'Priya Sharma',
      email: 'priya@example.com',
      phone: '+91 98765 43210',
      roles: ['Trader', 'Agent'],
      controlPercentage: 25,
      status: 'active',
      permissions: {
        canTrade: true,
        canViewFinancials: true,
        canManageStaff: false,
        canApproveTransactions: true,
      },
    },
    {
      id: '2',
      name: 'Amit Patel',
      email: 'amit@example.com',
      phone: '+91 98765 43211',
      roles: ['Buyer'],
      controlPercentage: 15,
      status: 'active',
      permissions: {
        canTrade: false,
        canViewFinancials: true,
        canManageStaff: false,
        canApproveTransactions: false,
      },
    },
    {
      id: '3',
      name: 'Sunita Verma',
      email: 'sunita@example.com',
      phone: '+91 98765 43212',
      roles: ['Trader', 'Logistics'],
      controlPercentage: 20,
      status: 'pending',
      permissions: {
        canTrade: true,
        canViewFinancials: false,
        canManageStaff: false,
        canApproveTransactions: false,
      },
    },
  ]);

  const totalControl = staffMembers.reduce((sum, member) => sum + member.controlPercentage, 0);
  const remainingControl = 100 - totalControl;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl flex items-center">
            <Users className="w-8 h-8 mr-3 text-blue-600" />
            User & Staff Management
          </h2>
          <p className="text-gray-600 mt-1">
            Manage up to 30 staff members with roles and permissions
          </p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F]">
              <UserPlus className="w-4 h-4 mr-2" />
              Add Staff Member
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Staff Member</DialogTitle>
              <DialogDescription>
                Invite a new team member and assign roles and permissions
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter name" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="email@example.com" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <Label htmlFor="control">Control % (Max: {remainingControl}%)</Label>
                  <Input id="control" type="number" placeholder="0" max={remainingControl} />
                </div>
              </div>
              <div>
                <Label>Assign Roles (multiple allowed)</Label>
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {['Producer', 'Trader', 'Agent', 'Buyer', 'Processor', 'Logistics'].map((role) => (
                    <label key={role} className="flex items-center space-x-2 p-2 border rounded cursor-pointer hover:bg-gray-50">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">{role}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <Label>Permissions</Label>
                <div className="space-y-3 mt-2">
                  {[
                    { id: 'trade', label: 'Can Trade' },
                    { id: 'financials', label: 'Can View Financials' },
                    { id: 'staff', label: 'Can Manage Staff' },
                    { id: 'approve', label: 'Can Approve Transactions' },
                  ].map((perm) => (
                    <div key={perm.id} className="flex items-center justify-between">
                      <span className="text-sm">{perm.label}</span>
                      <Switch />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Label>Invitation Method</Label>
                <Select defaultValue="email">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">Email Invitation</SelectItem>
                    <SelectItem value="otp">OTP to Phone</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F]">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Invitation
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-600">Total Staff</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{staffMembers.length} / 30</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-600">Active Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-green-600">
              {staffMembers.filter((s) => s.status === 'active').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-600">Pending Invites</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-orange-600">
              {staffMembers.filter((s) => s.status === 'pending').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-600">Control Remaining</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-blue-600">{remainingControl}%</div>
          </CardContent>
        </Card>
      </div>

      {/* Staff Table */}
      <Card>
        <CardHeader>
          <CardTitle>Staff Members</CardTitle>
          <CardDescription>View and manage your team members</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Member</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Roles</TableHead>
                <TableHead>Control %</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Permissions</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {staffMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src="" alt={member.name} />
                        <AvatarFallback className="bg-gradient-to-br from-blue-400 to-blue-600 text-white">
                          {member.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{member.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div className="flex items-center text-gray-600">
                        <Mail className="w-3 h-3 mr-1" />
                        {member.email}
                      </div>
                      <div className="flex items-center text-gray-600 mt-1">
                        <Smartphone className="w-3 h-3 mr-1" />
                        {member.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {member.roles.map((role) => (
                        <Badge key={role} variant="secondary" className="text-xs">
                          {role}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium">{member.controlPercentage}%</span>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        member.status === 'active'
                          ? 'default'
                          : member.status === 'pending'
                          ? 'secondary'
                          : 'outline'
                      }
                      className={
                        member.status === 'active'
                          ? 'bg-green-100 text-green-700'
                          : member.status === 'pending'
                          ? 'bg-orange-100 text-orange-700'
                          : ''
                      }
                    >
                      {member.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {member.permissions.canTrade && (
                        <Badge variant="outline" className="text-xs">
                          Trade
                        </Badge>
                      )}
                      {member.permissions.canViewFinancials && (
                        <Badge variant="outline" className="text-xs">
                          Finance
                        </Badge>
                      )}
                      {member.permissions.canApproveTransactions && (
                        <Badge variant="outline" className="text-xs">
                          Approve
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="ghost" size="sm">
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Role-based Permissions Matrix */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="w-5 h-5 mr-2 text-purple-600" />
            Permissions Matrix
          </CardTitle>
          <CardDescription>Default permissions for each role</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-medium">Permission</th>
                  <th className="text-center p-3 font-medium">Producer</th>
                  <th className="text-center p-3 font-medium">Trader</th>
                  <th className="text-center p-3 font-medium">Agent</th>
                  <th className="text-center p-3 font-medium">Buyer</th>
                  <th className="text-center p-3 font-medium">Processor</th>
                  <th className="text-center p-3 font-medium">Logistics</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'View Dashboard', all: true },
                  { label: 'Create Listings', roles: ['Producer', 'Trader'] },
                  { label: 'Place Orders', roles: ['Buyer', 'Trader', 'Processor'] },
                  { label: 'View Financials', roles: ['Trader', 'Agent'] },
                  { label: 'Manage Inventory', roles: ['Trader', 'Producer', 'Processor'] },
                  { label: 'Approve Transactions', roles: ['Trader'] },
                  { label: 'Access Reports', all: true },
                  { label: 'Manage Logistics', roles: ['Logistics', 'Trader'] },
                ].map((perm, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3">{perm.label}</td>
                    {['Producer', 'Trader', 'Agent', 'Buyer', 'Processor', 'Logistics'].map(
                      (role) => (
                        <td key={role} className="text-center p-3">
                          {perm.all || perm.roles?.includes(role) ? (
                            <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                          ) : (
                            <span className="text-gray-300">—</span>
                          )}
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
