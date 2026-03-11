"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Transaction = {
  id: string;
  title: string;
  date: string;
  type: 'Utility' | 'Wallet' | 'Purchase' | 'Transfer';
  amount: number;
  status: 'Success' | 'Pending' | 'Failed';
  icon: string;
  iconColor: string;
};

interface UserContextType {
  balance: number;
  transactions: Transaction[];
  addTransaction: (tx: Transaction) => void;
  updateBalance: (amount: number) => void;
}

const defaultTransactions: Transaction[] = [
  { id: '1', title: 'Electric Bill Payment', date: 'Oct 12, 2023', type: 'Utility', amount: -84.50, status: 'Success', icon: 'bolt', iconColor: 'text-orange-500' },
  { id: '2', title: 'Deposit from Bank', date: 'Oct 10, 2023', type: 'Wallet', amount: 500.00, status: 'Success', icon: 'download', iconColor: 'text-primary' },
  { id: '3', title: 'Amazon Gift Card', date: 'Oct 08, 2023', type: 'Purchase', amount: -25.00, status: 'Success', icon: 'shopping_bag', iconColor: 'text-indigo-500' },
  { id: '4', title: 'Transfer to Sarah M.', date: 'Oct 05, 2023', type: 'Transfer', amount: -120.00, status: 'Pending', icon: 'person', iconColor: 'text-slate-500' }
];

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [balance, setBalance] = useState<number>(12450.80);
  const [transactions, setTransactions] = useState<Transaction[]>(defaultTransactions);

  const addTransaction = (tx: Transaction) => {
    setTransactions(prev => [tx, ...prev]);
  };

  const updateBalance = (amount: number) => {
    setBalance(prev => prev + amount);
  };

  return (
    <UserContext.Provider value={{ balance, transactions, addTransaction, updateBalance }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
