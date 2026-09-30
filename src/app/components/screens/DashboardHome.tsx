import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { 
  TrendingUp, 
  TrendingDown, 
  Package, 
  DollarSign, 
  Users, 
  Activity,
  Wallet,
  Award
} from 'lucide-react';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';

interface DashboardHomeProps {
  currentRole: string;
}

export function DashboardHome({ currentRole }: DashboardHomeProps) {
  const stats = [
    { 
      title: 'Active Deals', 
      value: '24', 
      change: '+12%', 
      isPositive: true, 
      icon: Activity,
      color: '#10b981' 
    },
    { 
      title: 'Inventory', 
      value: '1,245 MT', 
      change: '-5%', 
      isPositive: false, 
      icon: Package,
      color: '#f59e0b' 
    },
    { 
      title: 'Revenue', 
      value: '₹45.2L', 
      change: '+28%', 
      isPositive: true, 
      icon: DollarSign,
      color: '#3b82f6' 
    },
    { 
      title: 'Partners', 
      value: '156', 
      change: '+8%', 
      isPositive: true, 
      icon: Users,
      color: '#8b5cf6' 
    },
  ];

  const recentDeals = [
    { id: 'TD-1234', commodity: 'Wheat', quantity: '50 MT', status: 'Inspection', buyer: 'ABC Corp' },
    { id: 'TD-1235', commodity: 'Rice', quantity: '75 MT', status: 'Billing', buyer: 'XYZ Ltd' },
    { id: 'TD-1236', commodity: 'Corn', quantity: '30 MT', status: 'Settlement', buyer: 'PQR Inc' },
    { id: 'TD-1237', commodity: 'Soybean', quantity: '100 MT', status: 'Listing', buyer: 'LMN Pvt' },
  ];

  const settlements = [
    { date: '2025-10-20', amount: '₹5,45,000', status: 'Completed', commodity: 'Wheat' },
    { date: '2025-10-18', amount: '₹3,20,000', status: 'Pending', commodity: 'Rice' },
    { date: '2025-10-15', amount: '₹8,90,000', status: 'Completed', commodity: 'Corn' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Welcome back, {currentRole}!</h1>
        <p className="text-gray-600">Here's what's happening with your business today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <Card key={idx}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <h3 className="text-2xl mb-2">{stat.value}</h3>
                    <div className="flex items-center gap-1">
                      {stat.isPositive ? (
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-600" />
                      )}
                      <span className={`text-sm ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: `${stat.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: stat.color }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Wallet Overview */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="w-5 h-5" />
              Wallet Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg" style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #F4E4C1 100%)' }}>
              <div className="flex items-center gap-2 text-white mb-1">
                <Award className="w-5 h-5" />
                <span className="text-sm">Commit Coins</span>
              </div>
              <h3 className="text-3xl text-white">2,450</h3>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Balance</span>
                <span>₹12,45,000</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Rewards Points</span>
                <span>840</span>
              </div>
              <Progress value={42} className="h-2" />
            </div>

            <div className="pt-2 border-t space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Available Credit</span>
                <span>₹5,00,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Pending Settlements</span>
                <span>₹3,20,000</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Deals */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Deals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentDeals.map((deal, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm">{deal.id}</span>
                      <Badge variant="outline" className="text-xs">{deal.commodity}</Badge>
                    </div>
                    <p className="text-sm text-gray-600">{deal.quantity} • {deal.buyer}</p>
                  </div>
                  <Badge 
                    style={{ 
                      background: deal.status === 'Settlement' ? '#10b981' : 
                                 deal.status === 'Billing' ? '#f59e0b' : '#3b82f6',
                      color: 'white'
                    }}
                  >
                    {deal.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Settlements */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Settlements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {settlements.map((settlement, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 border-b last:border-b-0">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm">{settlement.commodity}</p>
                    <p className="text-xs text-gray-500">{settlement.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm">{settlement.amount}</p>
                  <Badge 
                    variant={settlement.status === 'Completed' ? 'default' : 'outline'}
                    className="text-xs"
                  >
                    {settlement.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
