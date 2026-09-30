import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Brain, TrendingUp, TrendingDown, AlertTriangle, Sparkles, Calendar } from 'lucide-react';

export const AIInsightsCenter: React.FC = () => {
  const [commodity, setCommodity] = useState('wheat');
  const [timeframe, setTimeframe] = useState('30days');

  // Mock data for charts
  const priceData = [
    { date: 'Jan', price: 42, prediction: 43 },
    { date: 'Feb', price: 45, prediction: 46 },
    { date: 'Mar', price: 44, prediction: 47 },
    { date: 'Apr', price: 48, prediction: 50 },
    { date: 'May', price: 47, prediction: 49 },
    { date: 'Jun', price: 51, prediction: 52 },
  ];

  const demandData = [
    { region: 'North', demand: 4500 },
    { region: 'South', demand: 3800 },
    { region: 'East', demand: 4200 },
    { region: 'West', demand: 3500 },
  ];

  const insights = [
    {
      type: 'price-trend',
      title: 'Price Increase Expected',
      description: 'Wheat prices predicted to rise 8% in next 30 days due to seasonal demand',
      impact: 'high',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      type: 'demand',
      title: 'High Demand Alert',
      description: 'Northern region showing 35% increase in rice demand',
      impact: 'medium',
      icon: Sparkles,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      type: 'crop-health',
      title: 'Crop Health Warning',
      description: 'Pest activity detected in cotton growing regions, take preventive measures',
      impact: 'high',
      icon: AlertTriangle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      type: 'price-drop',
      title: 'Price Correction Alert',
      description: 'Pulses may see 5% price drop due to oversupply',
      impact: 'medium',
      icon: TrendingDown,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl flex items-center">
            <Brain className="w-8 h-8 mr-3 text-purple-600" />
            AI Insights Center
          </h2>
          <p className="text-gray-600 mt-1">
            Predictive analytics and intelligent market insights
          </p>
        </div>
        <Badge className="bg-purple-100 text-purple-700 border-purple-300">
          Powered by AI
        </Badge>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Commodity</label>
              <Select value={commodity} onValueChange={setCommodity}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wheat">Wheat</SelectItem>
                  <SelectItem value="rice">Rice</SelectItem>
                  <SelectItem value="cotton">Cotton</SelectItem>
                  <SelectItem value="pulses">Pulses</SelectItem>
                  <SelectItem value="all">All Commodities</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Location</label>
              <Select defaultValue="all">
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

      {/* Insights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <Card
              key={index}
              className={`${insight.bgColor} border-l-4 hover:shadow-lg transition-shadow`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div
                      className={`h-10 w-10 rounded-full ${insight.bgColor} flex items-center justify-center`}
                    >
                      <Icon className={`w-5 h-5 ${insight.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{insight.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {insight.description}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge
                    variant={insight.impact === 'high' ? 'destructive' : 'secondary'}
                  >
                    {insight.impact}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Price Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
              Price Trend Prediction
            </CardTitle>
            <CardDescription>
              Actual vs AI-predicted prices for {commodity}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={priceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#3b82f6"
                  name="Actual Price"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="prediction"
                  stroke="#D4AF37"
                  name="AI Prediction"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Demand Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-blue-600" />
              Regional Demand Analysis
            </CardTitle>
            <CardDescription>
              Current demand distribution across regions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={demandData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="region" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="demand" fill="#3b82f6" name="Demand (tons)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Crop Health Monitor */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-green-600" />
            Seasonal Recommendations
          </CardTitle>
          <CardDescription>AI-powered suggestions for optimal planting and harvesting</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-700 mb-2">Best Time to Plant</h4>
              <p className="text-sm text-gray-700">
                Wheat: Mid-November to Early December
              </p>
              <p className="text-xs text-gray-500 mt-2">Based on weather patterns</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-700 mb-2">Market Window</h4>
              <p className="text-sm text-gray-700">
                Sell between Feb 15 - Mar 10 for best prices
              </p>
              <p className="text-xs text-gray-500 mt-2">Historical price analysis</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-medium text-orange-700 mb-2">Risk Alert</h4>
              <p className="text-sm text-gray-700">
                Monitor for pests in Week 3-4 after sowing
              </p>
              <p className="text-xs text-gray-500 mt-2">Predictive crop health model</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
