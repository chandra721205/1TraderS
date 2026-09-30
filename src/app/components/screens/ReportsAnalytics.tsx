import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  FileText,
  Download,
  TrendingUp,
  Package,
  DollarSign,
  Clock,
  Filter,
  Calendar,
} from 'lucide-react';

interface ReportsAnalyticsProps {
  currentRole: string;
}

export const ReportsAnalytics: React.FC<ReportsAnalyticsProps> = ({ currentRole }) => {
  const [selectedCommodity, setSelectedCommodity] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [timeframe, setTimeframe] = useState('30days');

  // Sales Volume Data
  const salesVolumeData = [
    { month: 'Jan', volume: 450 },
    { month: 'Feb', volume: 520 },
    { month: 'Mar', volume: 480 },
    { month: 'Apr', volume: 610 },
    { month: 'May', volume: 580 },
    { month: 'Jun', volume: 650 },
  ];

  // Revenue Data
  const revenueData = [
    { month: 'Jan', revenue: 245000 },
    { month: 'Feb', revenue: 287000 },
    { month: 'Mar', revenue: 265000 },
    { month: 'Apr', revenue: 335000 },
    { month: 'May', revenue: 312000 },
    { month: 'Jun', revenue: 368000 },
  ];

  // Commodity Distribution
  const commodityData = [
    { name: 'Wheat', value: 35, color: '#F59E0B' },
    { name: 'Rice', value: 28, color: '#10B981' },
    { name: 'Cotton', value: 18, color: '#3B82F6' },
    { name: 'Pulses', value: 12, color: '#8B5CF6' },
    { name: 'Others', value: 7, color: '#6B7280' },
  ];

  // KPIs
  const kpis = [
    {
      label: 'Total Sales Volume',
      value: '3,290 MT',
      change: '+18%',
      isPositive: true,
      icon: Package,
      color: '#3B82F6',
    },
    {
      label: 'Average Price',
      value: '₹1,245/kg',
      change: '+5%',
      isPositive: true,
      icon: DollarSign,
      color: '#10B981',
    },
    {
      label: 'Total Revenue',
      value: '₹18.12L',
      change: '+22%',
      isPositive: true,
      icon: TrendingUp,
      color: '#F59E0B',
    },
    {
      label: 'Avg. Transaction Time',
      value: '4.2 days',
      change: '-12%',
      isPositive: true,
      icon: Clock,
      color: '#8B5CF6',
    },
  ];

  const reports = [
    { id: 1, name: 'KYC Compliance Report', type: 'KYC', date: '2024-10-20', size: '2.4 MB' },
    { id: 2, name: 'Sales Summary - October', type: 'Sales', date: '2024-10-19', size: '1.8 MB' },
    { id: 3, name: 'Ledger Report - Q3 2024', type: 'Ledger', date: '2024-10-15', size: '3.2 MB' },
    { id: 4, name: 'Settlement Statement', type: 'Settlement', date: '2024-10-12', size: '1.5 MB' },
    { id: 5, name: 'Inventory Report', type: 'Inventory', date: '2024-10-10', size: '2.1 MB' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl flex items-center">
            <FileText className="w-8 h-8 mr-3 text-blue-600" />
            Reports & Analytics
          </h2>
          <p className="text-gray-600 mt-1">
            Comprehensive insights and downloadable reports for {currentRole}
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

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Role View</label>
              <Select defaultValue={currentRole.toLowerCase()}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="trader">Trader</SelectItem>
                  <SelectItem value="producer">Producer</SelectItem>
                  <SelectItem value="buyer">Buyer</SelectItem>
                  <SelectItem value="agent">Agent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Region</label>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  <SelectItem value="north">North India</SelectItem>
                  <SelectItem value="south">South India</SelectItem>
                  <SelectItem value="east">East India</SelectItem>
                  <SelectItem value="west">West India</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Commodity</label>
              <Select value={selectedCommodity} onValueChange={setSelectedCommodity}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Commodities</SelectItem>
                  <SelectItem value="wheat">Wheat</SelectItem>
                  <SelectItem value="rice">Rice</SelectItem>
                  <SelectItem value="cotton">Cotton</SelectItem>
                  <SelectItem value="pulses">Pulses</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Timeframe</label>
              <Select value={timeframe} onValueChange={setTimeframe}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">Last 7 Days</SelectItem>
                  <SelectItem value="30days">Last 30 Days</SelectItem>
                  <SelectItem value="90days">Last 90 Days</SelectItem>
                  <SelectItem value="1year">Last Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{kpi.label}</p>
                    <h3 className="text-2xl mb-2">{kpi.value}</h3>
                    <div className="flex items-center gap-1">
                      <TrendingUp
                        className={`w-4 h-4 ${
                          kpi.isPositive ? 'text-green-600' : 'text-red-600'
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          kpi.isPositive ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {kpi.change}
                      </span>
                    </div>
                  </div>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: `${kpi.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: kpi.color }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Volume Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Sales Volume Trend</CardTitle>
            <CardDescription>Monthly sales volume in metric tons</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesVolumeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="volume" fill="#3B82F6" name="Volume (MT)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Revenue Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
            <CardDescription>Monthly revenue in INR</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#D4AF37"
                  strokeWidth={2}
                  name="Revenue (₹)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Commodity Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Commodity Distribution</CardTitle>
            <CardDescription>Sales breakdown by commodity type</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={commodityData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name} (${value}%)`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {commodityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Transaction Time Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Transaction Time Analysis</CardTitle>
            <CardDescription>Average time per transaction stage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { stage: 'Listing', time: 0.5, color: '#3B82F6' },
                { stage: 'Inspection', time: 1.2, color: '#10B981' },
                { stage: 'Sale', time: 0.8, color: '#F59E0B' },
                { stage: 'Billing', time: 0.7, color: '#8B5CF6' },
                { stage: 'Settlement', time: 1.0, color: '#D4AF37' },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">{item.stage}</span>
                    <span className="text-sm">{item.time} days</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${(item.time / 1.5) * 100}%`,
                        background: item.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Downloadable Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Downloadable Reports</CardTitle>
          <CardDescription>Access and download detailed reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {reports.map((report) => (
              <div
                key={report.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">{report.name}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {report.type}
                      </Badge>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {report.date}
                      </span>
                      <span className="text-xs text-gray-500">{report.size}</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
