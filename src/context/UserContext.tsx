"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [balance, setBalance] = useState<number>(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch('/api/me');
        if (res.ok) {
          const data = await res.json();
          if (data.success) {
            setBalance(data.user.balance);
            setTransactions(data.transactions);
          }
        }
      } catch (err) {
        console.error('Failed to fetch user data', err);
      }
    };

    fetchUserData();
  }, []);

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
