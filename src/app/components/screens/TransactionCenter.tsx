import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Progress } from '../ui/progress';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import {
  FileText,
  Eye,
  ShoppingCart,
  Receipt,
  Wallet,
  AlertCircle,
  CheckCircle,
  Clock,
  ArrowRight,
  Brain,
} from 'lucide-react';

interface Transaction {
  id: string;
  commodity: string;
  quantity: string;
  stage: 'listing' | 'inspection' | 'sale' | 'billing' | 'settlement';
  buyer: string;
  seller: string;
  amount: string;
  date: string;
  status: 'completed' | 'in-progress' | 'pending' | 'dispute';
}

export const TransactionCenter: React.FC = () => {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const transactions: Transaction[] = [
    {
      id: 'TXN-2024-001',
      commodity: 'Wheat - Grade A',
      quantity: '1000 kg',
      stage: 'settlement',
      buyer: 'ABC Traders',
      seller: 'Ramesh Farm',
      amount: '₹45,000',
      date: '2024-10-20',
      status: 'in-progress',
    },
    {
      id: 'TXN-2024-002',
      commodity: 'Rice - Basmati',
      quantity: '500 kg',
      stage: 'billing',
      buyer: 'XYZ Mills',
      seller: 'Suresh Agri',
      amount: '₹32,500',
      date: '2024-10-21',
      status: 'in-progress',
    },
    {
      id: 'TXN-2024-003',
      commodity: 'Cotton Bales',
      quantity: '200 units',
      stage: 'inspection',
      buyer: 'Cotton Corp',
      seller: 'Vijay Farms',
      amount: '₹1,20,000',
      date: '2024-10-22',
      status: 'pending',
    },
    {
      id: 'TXN-2024-004',
      commodity: 'Pulses - Toor Dal',
      quantity: '750 kg',
      stage: 'sale',
      buyer: 'Retail Mart',
      seller: 'Kishore Agro',
      amount: '₹52,500',
      date: '2024-10-19',
      status: 'dispute',
    },
  ];

  const stages = [
    { id: 'listing', label: 'Listing', icon: FileText },
    { id: 'inspection', label: 'Inspection', icon: Eye },
    { id: 'sale', label: 'Sale', icon: ShoppingCart },
    { id: 'billing', label: 'Billing', icon: Receipt },
    { id: 'settlement', label: 'Settlement', icon: Wallet },
  ];

  const getStageProgress = (stage: string) => {
    const index = stages.findIndex((s) => s.id === stage);
    return ((index + 1) / stages.length) * 100;
  };

  const handleViewDetails = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setIsDetailsOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl flex items-center">
            <Receipt className="w-8 h-8 mr-3 text-purple-600" />
            Transaction Center
          </h2>
          <p className="text-gray-600 mt-1">
            Track and manage all transactions from listing to settlement
          </p>
        </div>
        <Button className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F]">
          New Transaction
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          const count = transactions.filter((t) => t.stage === stage.id).length;
          return (
            <Card key={stage.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Icon className="w-5 h-5 text-blue-600" />
                  <Badge variant="secondary">{count}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">{stage.label}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Tabs for different views */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Transactions</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="disputes">Disputes</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Transactions</CardTitle>
              <CardDescription>Complete list of transactions with current status</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Commodity</TableHead>
                    <TableHead>Parties</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Stage</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((txn) => (
                    <TableRow key={txn.id}>
                      <TableCell className="font-medium">{txn.id}</TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{txn.commodity}</p>
                          <p className="text-sm text-gray-500">{txn.quantity}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <p>
                            <span className="text-gray-500">Buyer:</span> {txn.buyer}
                          </p>
                          <p>
                            <span className="text-gray-500">Seller:</span> {txn.seller}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{txn.amount}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{txn.stage}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="w-24">
                          <Progress value={getStageProgress(txn.stage)} className="h-2" />
                          <p className="text-xs text-gray-500 mt-1">
                            {Math.round(getStageProgress(txn.stage))}%
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={
                            txn.status === 'completed'
                              ? 'bg-green-100 text-green-700'
                              : txn.status === 'in-progress'
                              ? 'bg-blue-100 text-blue-700'
                              : txn.status === 'dispute'
                              ? 'bg-red-100 text-red-700'
                              : 'bg-orange-100 text-orange-700'
                          }
                        >
                          {txn.status === 'completed' && <CheckCircle className="w-3 h-3 mr-1" />}
                          {txn.status === 'in-progress' && <Clock className="w-3 h-3 mr-1" />}
                          {txn.status === 'dispute' && <AlertCircle className="w-3 h-3 mr-1" />}
                          {txn.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleViewDetails(txn)}
                        >
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="in-progress">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-gray-500">
                {transactions.filter((t) => t.status === 'in-progress').length} transactions in
                progress
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-gray-500">
                {transactions.filter((t) => t.status === 'completed').length} completed transactions
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="disputes">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-red-600" />
                Dispute / Mismatch Resolution
              </CardTitle>
              <CardDescription>
                Transactions requiring attention with AI-powered suggestions
              </CardDescription>
            </CardHeader>
            <CardContent>
              {transactions
                .filter((t) => t.status === 'dispute')
                .map((txn) => (
                  <div key={txn.id} className="mb-4 p-4 border border-red-200 rounded-lg bg-red-50">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-medium">{txn.id}</p>
                        <p className="text-sm text-gray-600">{txn.commodity}</p>
                      </div>
                      <Badge variant="destructive">Dispute</Badge>
                    </div>
                    <div className="bg-white p-3 rounded border border-purple-200">
                      <div className="flex items-start space-x-2">
                        <Brain className="w-5 h-5 text-purple-600 mt-1" />
                        <div>
                          <p className="font-medium text-sm text-purple-900">AI Suggestion</p>
                          <p className="text-sm text-gray-700 mt-1">
                            Quality mismatch detected. Recommend third-party inspection at buyer's
                            location. Estimated resolution time: 2-3 days. Consider 5% price
                            adjustment or partial refund.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <Button size="sm" variant="outline">
                        Schedule Inspection
                      </Button>
                      <Button size="sm" variant="outline">
                        Initiate Mediation
                      </Button>
                      <Button size="sm" className="bg-purple-600 text-white">
                        Apply AI Suggestion
                      </Button>
                    </div>
                  </div>
                ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Transaction Details Dialog */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Transaction Details</DialogTitle>
            <DialogDescription>
              {selectedTransaction?.id} - {selectedTransaction?.commodity}
            </DialogDescription>
          </DialogHeader>
          {selectedTransaction && (
            <div className="space-y-4">
              {/* Progress Timeline */}
              <div className="relative">
                <div className="flex justify-between items-center">
                  {stages.map((stage, index) => {
                    const Icon = stage.icon;
                    const isCompleted =
                      stages.findIndex((s) => s.id === selectedTransaction.stage) >= index;
                    const isCurrent = stage.id === selectedTransaction.stage;
                    return (
                      <div key={stage.id} className="flex-1">
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center ${
                              isCurrent
                                ? 'bg-blue-600 text-white'
                                : isCompleted
                                ? 'bg-green-600 text-white'
                                : 'bg-gray-200 text-gray-500'
                            }`}
                          >
                            <Icon className="w-6 h-6" />
                          </div>
                          <p className="text-xs mt-2 text-center">{stage.label}</p>
                          {isCurrent && (
                            <Badge className="mt-1 bg-blue-100 text-blue-700">Current</Badge>
                          )}
                        </div>
                        {index < stages.length - 1 && (
                          <div
                            className={`h-1 ${
                              isCompleted ? 'bg-green-600' : 'bg-gray-200'
                            } absolute top-6 left-1/2 w-full`}
                            style={{ left: `${(index + 0.5) * (100 / stages.length)}%` }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <p className="text-sm text-gray-500">Buyer</p>
                  <p className="font-medium">{selectedTransaction.buyer}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Seller</p>
                  <p className="font-medium">{selectedTransaction.seller}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Quantity</p>
                  <p className="font-medium">{selectedTransaction.quantity}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Amount</p>
                  <p className="font-medium">{selectedTransaction.amount}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">{selectedTransaction.date}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <Badge>{selectedTransaction.status}</Badge>
                </div>
              </div>

              <div className="flex justify-end space-x-2">
                <Button variant="outline">Download Invoice</Button>
                <Button className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F]">
                  Proceed to Next Stage
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
