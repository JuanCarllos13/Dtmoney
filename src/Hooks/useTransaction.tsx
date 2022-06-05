import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
  id: number,
  title: string,
  amount: number,
  type: string,
  category: string,
  createdAt: string
}
// interface TransactionInput {
//   title: string,
//   amount: number,
//   type: string,
//   category: string,
// }

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'> //deleta os campos

// type TransactionInput = Pick<Transaction, 'title' | 'amount' |'type' | 'category'> //Pega só os campos que eu quero


interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[],
  createTransactions: (transaction: TransactionInput) => Promise<void>; //Não retorna valor na função
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData) // Tipando so para ignorar o erro

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])


  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransactions(transactionInput: TransactionInput) {
  const response =  await api.post('/transactions',  {...transactionInput, createdAt: new Date()})
    const {transaction} = response.data
    setTransactions([...transactions, transaction]) // adicionado no vetor
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}


export function useTransaction(){
  const context = useContext(TransactionsContext)
  return context
}