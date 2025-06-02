
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CreditCard, Calendar, DollarSign, Clock, CheckCircle, Download, Receipt } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface PaymentItem {
  id: string;
  type: 'tuition' | 'hostel' | 'library' | 'lab' | 'exam' | 'certificate';
  title: string;
  amount: number;
  dueDate: string;
  status: 'pending' | 'paid' | 'overdue';
  description: string;
  semester?: string;
}

interface PaymentHistory {
  id: string;
  title: string;
  amount: number;
  date: string;
  transactionId: string;
  method: string;
}

const PaymentPortal = () => {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'bank'>('card');

  const pendingPayments: PaymentItem[] = [
    {
      id: '1',
      type: 'tuition',
      title: 'Semester 6 Tuition Fee',
      amount: 45000,
      dueDate: '2024-06-30',
      status: 'pending',
      description: 'Tuition fee for 6th semester including lab charges',
      semester: 'Semester 6'
    },
    {
      id: '2',
      type: 'hostel',
      title: 'Hostel Fee - Q2 2024',
      amount: 15000,
      dueDate: '2024-06-15',
      status: 'pending',
      description: 'Hostel accommodation fee for Q2 2024',
    },
    {
      id: '3',
      type: 'library',
      title: 'Library Fine',
      amount: 250,
      dueDate: '2024-06-10',
      status: 'overdue',
      description: 'Late return fine for borrowed books',
    },
    {
      id: '4',
      type: 'exam',
      title: 'Exam Registration Fee',
      amount: 2500,
      dueDate: '2024-06-20',
      status: 'pending',
      description: 'Registration fee for semester end examinations',
    }
  ];

  const paymentHistory: PaymentHistory[] = [
    {
      id: 'txn001',
      title: 'Semester 5 Tuition Fee',
      amount: 45000,
      date: '2024-01-15',
      transactionId: 'TXN123456789',
      method: 'Credit Card'
    },
    {
      id: 'txn002',
      title: 'Hostel Fee - Q1 2024',
      amount: 15000,
      date: '2024-01-05',
      transactionId: 'TXN123456788',
      method: 'UPI'
    },
    {
      id: 'txn003',
      title: 'Lab Equipment Fee',
      amount: 3000,
      date: '2023-12-20',
      transactionId: 'TXN123456787',
      method: 'Bank Transfer'
    }
  ];

  const totalPending = pendingPayments.reduce((sum, payment) => sum + payment.amount, 0);
  const totalPaid = paymentHistory.reduce((sum, payment) => sum + payment.amount, 0);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="text-orange-600"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
      case 'paid':
        return <Badge variant="outline" className="text-green-600"><CheckCircle className="w-3 h-3 mr-1" />Paid</Badge>;
      case 'overdue':
        return <Badge variant="destructive">Overdue</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getPaymentIcon = (type: string) => {
    switch (type) {
      case 'tuition': return '🎓';
      case 'hostel': return '🏠';
      case 'library': return '📚';
      case 'lab': return '🔬';
      case 'exam': return '📝';
      case 'certificate': return '📜';
      default: return '💰';
    }
  };

  const handlePayment = (paymentId: string) => {
    const payment = pendingPayments.find(p => p.id === paymentId);
    if (!payment) return;

    toast({
      title: "Payment Initiated",
      description: `Payment of ₹${payment.amount.toLocaleString()} for ${payment.title} has been initiated.`,
    });

    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Payment Successful",
        description: "Your payment has been processed successfully!",
      });
      setSelectedPayment(null);
    }, 2000);
  };

  const getDaysUntilDue = (dueDate: string) => {
    const due = new Date(dueDate);
    const now = new Date();
    const diffTime = due.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Payment Portal</h2>
        <div className="flex space-x-4">
          <Card className="px-4 py-2">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5 text-red-600" />
              <div>
                <p className="text-sm text-gray-600">Total Pending</p>
                <p className="font-bold text-red-600">₹{totalPending.toLocaleString()}</p>
              </div>
            </div>
          </Card>
          <Card className="px-4 py-2">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Total Paid</p>
                <p className="font-bold text-green-600">₹{totalPaid.toLocaleString()}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Pending Payments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CreditCard className="h-5 w-5" />
            <span>Pending Payments</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {pendingPayments.map((payment) => {
              const daysUntilDue = getDaysUntilDue(payment.dueDate);
              const isOverdue = daysUntilDue < 0;
              
              return (
                <Card key={payment.id} className={`${isOverdue ? 'border-red-200 bg-red-50' : ''} hover:shadow-md transition-shadow`}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl">{getPaymentIcon(payment.type)}</div>
                        <div>
                          <h4 className="font-semibold text-lg">{payment.title}</h4>
                          <p className="text-sm text-gray-600">{payment.description}</p>
                          {payment.semester && (
                            <Badge variant="secondary" className="mt-1">{payment.semester}</Badge>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600">₹{payment.amount.toLocaleString()}</p>
                        {getStatusBadge(payment.status)}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-3 border-t">
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>Due: {new Date(payment.dueDate).toLocaleDateString()}</span>
                        </span>
                        {payment.status === 'pending' && (
                          <span className={`${isOverdue ? 'text-red-600' : daysUntilDue <= 7 ? 'text-orange-600' : 'text-green-600'}`}>
                            {isOverdue ? `Overdue by ${Math.abs(daysUntilDue)} days` : `${daysUntilDue} days remaining`}
                          </span>
                        )}
                      </div>
                      
                      <Button 
                        onClick={() => setSelectedPayment(payment.id)}
                        className={payment.status === 'overdue' ? 'bg-red-600 hover:bg-red-700' : ''}
                      >
                        Pay Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Payment Method Selection Modal */}
      {selectedPayment && (
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle>Complete Payment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {(() => {
              const payment = pendingPayments.find(p => p.id === selectedPayment);
              return payment ? (
                <>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold">{payment.title}</h4>
                    <p className="text-sm text-gray-600">{payment.description}</p>
                    <p className="text-xl font-bold text-blue-600 mt-2">₹{payment.amount.toLocaleString()}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Select Payment Method</label>
                    <div className="grid grid-cols-3 gap-2">
                      <Button
                        variant={paymentMethod === 'card' ? 'default' : 'outline'}
                        onClick={() => setPaymentMethod('card')}
                        className="flex flex-col items-center p-4"
                      >
                        <CreditCard className="h-6 w-6 mb-1" />
                        <span className="text-xs">Credit/Debit Card</span>
                      </Button>
                      <Button
                        variant={paymentMethod === 'upi' ? 'default' : 'outline'}
                        onClick={() => setPaymentMethod('upi')}
                        className="flex flex-col items-center p-4"
                      >
                        <span className="text-lg mb-1">📱</span>
                        <span className="text-xs">UPI</span>
                      </Button>
                      <Button
                        variant={paymentMethod === 'bank' ? 'default' : 'outline'}
                        onClick={() => setPaymentMethod('bank')}
                        className="flex flex-col items-center p-4"
                      >
                        <span className="text-lg mb-1">🏦</span>
                        <span className="text-xs">Net Banking</span>
                      </Button>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button 
                      onClick={() => handlePayment(selectedPayment)}
                      className="flex-1"
                    >
                      Pay ₹{payment.amount.toLocaleString()}
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setSelectedPayment(null)}
                    >
                      Cancel
                    </Button>
                  </div>
                </>
              ) : null;
            })()}
          </CardContent>
        </Card>
      )}

      {/* Payment History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Receipt className="h-5 w-5" />
            <span>Payment History</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {paymentHistory.map((payment) => (
              <div key={payment.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium">{payment.title}</h4>
                  <p className="text-sm text-gray-600">
                    {new Date(payment.date).toLocaleDateString()} • {payment.method} • {payment.transactionId}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-bold text-green-600">₹{payment.amount.toLocaleString()}</span>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-1" />
                    Receipt
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentPortal;
