import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import {
  Wallet,
  TrendingUp,
  DollarSign,
  FileText,
  Building2,
  Shield,
  Download,
  ArrowUpRight,
  CheckCircle,
  Clock,
} from 'lucide-react';

export const FinancialOverview: React.FC = () => {
  const billDiscounting = [
    { id: 'BD-001', amount: '₹45,000', dueDate: '2024-11-15', status: 'approved', rate: '8.5%' },
    { id: 'BD-002', amount: '₹32,500', dueDate: '2024-11-20', status: 'pending', rate: '9.0%' },
    { id: 'BD-003', amount: '₹78,000', dueDate: '2024-11-25', status: 'disbursed', rate: '8.2%' },
  ];

  const settlements = [
    { id: 'SET-001', commodity: 'Wheat', amount: '₹52,000', date: '2024-10-15', status: 'completed' },
    { id: 'SET-002', commodity: 'Rice', amount: '₹68,500', date: '2024-10-18', status: 'completed' },
    { id: 'SET-003', commodity: 'Cotton', amount: '₹1,20,000', date: '2024-10-20', status: 'pending' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl flex items-center">
            <Wallet className="w-8 h-8 mr-3 text-green-600" />
            Financial Overview
          </h2>
          <p className="text-gray-600 mt-1">
            Manage settlements, loans, and financial integrations
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
          <Button variant="outline">
            <FileText className="w-4 h-4 mr-2" />
            Export PDF
          </Button>
        </div>
      </div>

      {/* Financial Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-green-700">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-green-900">₹8,45,000</div>
            <p className="text-xs text-green-700 mt-1 flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              +18% this month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-blue-700">Pending Settlements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-blue-900">₹2,35,000</div>
            <p className="text-xs text-blue-700 mt-1">7 transactions</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-purple-700">Advance Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-purple-900">₹1,25,000</div>
            <p className="text-xs text-purple-700 mt-1">3 active advances</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-orange-700">Loan Eligibility</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-orange-900">₹5,00,000</div>
            <p className="text-xs text-orange-700 mt-1">Based on turnover</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bill Discounting */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="w-5 h-5 mr-2 text-blue-600" />
              Bill Discounting
            </CardTitle>
            <CardDescription>Early payment facility against invoices</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {billDiscounting.map((bill) => (
              <div key={bill.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-medium">{bill.id}</p>
                    <p className="text-sm text-gray-600">Due: {bill.dueDate}</p>
                  </div>
                  <Badge
                    className={
                      bill.status === 'disbursed'
                        ? 'bg-green-100 text-green-700'
                        : bill.status === 'approved'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-orange-100 text-orange-700'
                    }
                  >
                    {bill.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl">{bill.amount}</p>
                    <p className="text-xs text-gray-500">Interest: {bill.rate}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
            <Button className="w-full" variant="outline">
              <ArrowUpRight className="w-4 h-4 mr-2" />
              Apply for Bill Discounting
            </Button>
          </CardContent>
        </Card>

        {/* Settlements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
              Recent Settlements
            </CardTitle>
            <CardDescription>Payment settlements and tracking</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {settlements.map((settlement) => (
              <div
                key={settlement.id}
                className="p-4 border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-medium">{settlement.id}</p>
                    <p className="text-sm text-gray-600">{settlement.commodity}</p>
                  </div>
                  <Badge
                    className={
                      settlement.status === 'completed'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-orange-100 text-orange-700'
                    }
                  >
                    {settlement.status === 'completed' ? (
                      <CheckCircle className="w-3 h-3 mr-1" />
                    ) : (
                      <Clock className="w-3 h-3 mr-1" />
                    )}
                    {settlement.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl">{settlement.amount}</p>
                    <p className="text-xs text-gray-500">{settlement.date}</p>
                  </div>
                  {settlement.status === 'pending' && (
                    <Button size="sm" className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F]">
                      Complete
                    </Button>
                  )}
                </div>
              </div>
            ))}
            <Button className="w-full" variant="outline">
              View All Settlements
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Financial Integrations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Building2 className="w-5 h-5 mr-2 text-purple-600" />
            Financial Integrations
          </CardTitle>
          <CardDescription>
            Connect with banks, NBFCs, and insurance providers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Banks */}
            <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-blue-400 transition-colors cursor-pointer">
              <Building2 className="w-12 h-12 mx-auto text-gray-400 mb-3" />
              <h4 className="font-medium mb-2">Banks</h4>
              <p className="text-sm text-gray-600 mb-4">
                Connect with HDFC, ICICI, SBI, and more
              </p>
              <Button variant="outline" size="sm">
                Connect Bank
              </Button>
            </div>

            {/* NBFCs */}
            <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-green-400 transition-colors cursor-pointer">
              <DollarSign className="w-12 h-12 mx-auto text-gray-400 mb-3" />
              <h4 className="font-medium mb-2">NBFCs</h4>
              <p className="text-sm text-gray-600 mb-4">
                Quick loans from Bajaj, Tata Capital, etc.
              </p>
              <Button variant="outline" size="sm">
                Connect NBFC
              </Button>
            </div>

            {/* Insurance */}
            <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-orange-400 transition-colors cursor-pointer">
              <Shield className="w-12 h-12 mx-auto text-gray-400 mb-3" />
              <h4 className="font-medium mb-2">Insurance</h4>
              <p className="text-sm text-gray-600 mb-4">
                Crop and trade insurance providers
              </p>
              <Button variant="outline" size="sm">
                Connect Insurance
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Advance Tracking */}
      <Card>
        <CardHeader>
          <CardTitle>Advance Tracking & Recovery</CardTitle>
          <CardDescription>Monitor advances given to suppliers and recovery status</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Advance ID</TableHead>
                <TableHead>Party Name</TableHead>
                <TableHead>Amount Given</TableHead>
                <TableHead>Amount Recovered</TableHead>
                <TableHead>Balance</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">ADV-001</TableCell>
                <TableCell>Ramesh Farm</TableCell>
                <TableCell>₹50,000</TableCell>
                <TableCell>₹35,000</TableCell>
                <TableCell>₹15,000</TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <Progress value={70} className="h-2" />
                    <p className="text-xs text-gray-500">70% recovered</p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className="bg-blue-100 text-blue-700">Active</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">ADV-002</TableCell>
                <TableCell>Suresh Agri</TableCell>
                <TableCell>₹30,000</TableCell>
                <TableCell>₹30,000</TableCell>
                <TableCell>₹0</TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <Progress value={100} className="h-2" />
                    <p className="text-xs text-gray-500">Fully recovered</p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-700">Closed</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">ADV-003</TableCell>
                <TableCell>Kishore Agro</TableCell>
                <TableCell>₹45,000</TableCell>
                <TableCell>₹10,000</TableCell>
                <TableCell>₹35,000</TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <Progress value={22} className="h-2" />
                    <p className="text-xs text-gray-500">22% recovered</p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className="bg-orange-100 text-orange-700">Overdue</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
