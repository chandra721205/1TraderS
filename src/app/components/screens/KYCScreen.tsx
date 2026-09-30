import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import {
  FileCheck,
  Upload,
  CheckCircle,
  Clock,
  AlertCircle,
  User,
  Building2,
  CreditCard,
  FileText,
  Shield,
} from 'lucide-react';

export const KYCScreen: React.FC = () => {
  const [kycProgress, setKycProgress] = useState(65);

  const kycDocuments = [
    { id: 1, name: 'Identity Proof', type: 'Aadhaar Card', status: 'verified', file: 'aadhaar_123.pdf' },
    { id: 2, name: 'Address Proof', type: 'Utility Bill', status: 'verified', file: 'utility_bill.pdf' },
    { id: 3, name: 'Bank Details', type: 'Cancelled Cheque', status: 'pending', file: 'cheque_001.pdf' },
    { id: 4, name: 'Business Registration', type: 'GST Certificate', status: 'rejected', file: 'gst_cert.pdf' },
    { id: 5, name: 'Trade License', type: 'FSSAI License', status: 'not-uploaded', file: null },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'verified':
        return (
          <Badge className="bg-green-100 text-green-700">
            <CheckCircle className="w-3 h-3 mr-1" />
            Verified
          </Badge>
        );
      case 'pending':
        return (
          <Badge className="bg-orange-100 text-orange-700">
            <Clock className="w-3 h-3 mr-1" />
            Pending
          </Badge>
        );
      case 'rejected':
        return (
          <Badge className="bg-red-100 text-red-700">
            <AlertCircle className="w-3 h-3 mr-1" />
            Rejected
          </Badge>
        );
      default:
        return (
          <Badge variant="outline" className="text-gray-600">
            Not Uploaded
          </Badge>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl flex items-center">
            <FileCheck className="w-8 h-8 mr-3 text-green-600" />
            KYC Verification
          </h2>
          <p className="text-gray-600 mt-1">
            Complete your KYC to unlock all platform features
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Overall Progress</p>
          <div className="flex items-center gap-2 mt-1">
            <Progress value={kycProgress} className="w-32 h-2" />
            <span className="font-medium">{kycProgress}%</span>
          </div>
        </div>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-green-50 border-green-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-green-700">Verified</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-green-900">
              {kycDocuments.filter((d) => d.status === 'verified').length}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-orange-50 border-orange-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-orange-700">Pending Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-orange-900">
              {kycDocuments.filter((d) => d.status === 'pending').length}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-red-50 border-red-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-red-700">Rejected</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-red-900">
              {kycDocuments.filter((d) => d.status === 'rejected').length}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-blue-700">Remaining</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-blue-900">
              {kycDocuments.filter((d) => d.status === 'not-uploaded').length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* KYC Tabs */}
      <Tabs defaultValue="documents" className="space-y-4">
        <TabsList>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="business">Business Info</TabsTrigger>
          <TabsTrigger value="bank">Bank Details</TabsTrigger>
        </TabsList>

        <TabsContent value="documents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Document Upload & Verification</CardTitle>
              <CardDescription>Upload required documents for verification</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {kycDocuments.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-sm text-gray-600">{doc.type}</p>
                        {doc.file && (
                          <p className="text-xs text-gray-500 mt-1">File: {doc.file}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      {getStatusBadge(doc.status)}
                      {doc.status === 'not-uploaded' || doc.status === 'rejected' ? (
                        <Button size="sm" variant="outline">
                          <Upload className="w-4 h-4 mr-2" />
                          Upload
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline">
                          View
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {kycDocuments.some((d) => d.status === 'rejected') && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-red-900">Action Required</p>
                      <p className="text-sm text-red-700 mt-1">
                        Some documents have been rejected. Please review the feedback and re-upload
                        corrected documents.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="personal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" defaultValue="Rajesh Kumar" />
                </div>
                <div>
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" defaultValue="1985-06-15" />
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
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" defaultValue="123, MG Road, Bangalore, Karnataka - 560001" />
                </div>
                <div>
                  <Label htmlFor="aadhaar">Aadhaar Number</Label>
                  <Input id="aadhaar" defaultValue="1234 5678 9012" />
                </div>
                <div>
                  <Label htmlFor="pan">PAN Number</Label>
                  <Input id="pan" defaultValue="ABCDE1234F" />
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <Button className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F]">
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="business" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building2 className="w-5 h-5 mr-2" />
                Business Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input id="businessName" defaultValue="Rajesh Agro Traders" />
                </div>
                <div>
                  <Label htmlFor="businessType">Business Type</Label>
                  <Input id="businessType" defaultValue="Proprietorship" />
                </div>
                <div>
                  <Label htmlFor="gst">GST Number</Label>
                  <Input id="gst" defaultValue="29ABCDE1234F1Z5" />
                </div>
                <div>
                  <Label htmlFor="fssai">FSSAI License</Label>
                  <Input id="fssai" defaultValue="12345678901234" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="businessAddress">Business Address</Label>
                  <Input
                    id="businessAddress"
                    defaultValue="Plot 45, Industrial Area, Bangalore - 560045"
                  />
                </div>
                <div>
                  <Label htmlFor="yearEstablished">Year Established</Label>
                  <Input id="yearEstablished" type="number" defaultValue="2015" />
                </div>
                <div>
                  <Label htmlFor="employees">Number of Employees</Label>
                  <Input id="employees" type="number" defaultValue="12" />
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <Button className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F]">
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bank" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="w-5 h-5 mr-2" />
                Bank Account Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="accountName">Account Holder Name</Label>
                  <Input id="accountName" defaultValue="Rajesh Kumar" />
                </div>
                <div>
                  <Label htmlFor="accountNumber">Account Number</Label>
                  <Input id="accountNumber" defaultValue="1234567890" />
                </div>
                <div>
                  <Label htmlFor="ifsc">IFSC Code</Label>
                  <Input id="ifsc" defaultValue="HDFC0001234" />
                </div>
                <div>
                  <Label htmlFor="bankName">Bank Name</Label>
                  <Input id="bankName" defaultValue="HDFC Bank" />
                </div>
                <div>
                  <Label htmlFor="branch">Branch</Label>
                  <Input id="branch" defaultValue="MG Road, Bangalore" />
                </div>
                <div>
                  <Label htmlFor="accountType">Account Type</Label>
                  <Input id="accountType" defaultValue="Current Account" />
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-900">Secure Verification</p>
                    <p className="text-sm text-blue-700 mt-1">
                      Your bank details are encrypted and verified through secure channels. Upload a
                      cancelled cheque for faster verification.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-6 space-x-2">
                <Button variant="outline">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Cancelled Cheque
                </Button>
                <Button className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F]">
                  Save & Verify
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
