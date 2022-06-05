import React, { useState } from 'react';
import Modal from 'react-modal'
import { DashBoard } from './components/DashBorad';
import { Header } from './components/Header';
import { GlobalStyles } from './styles/global'
import { NewTransactionModal } from './components/NewTransactionModal'
import {  TransactionsProvider } from './Hooks/useTransaction';


Modal.setAppElement('#root');
export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false)


  function handleOpenNewTransactionModal() {
    setIsNewTransactionsModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionsModalOpen(false)
  }
  return (
    <TransactionsProvider>
      <Header OnOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <DashBoard />
      <NewTransactionModal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyles />

    </TransactionsProvider>
  );
}

export default App;
