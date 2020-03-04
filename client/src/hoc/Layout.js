import React, { useContext } from 'react'
import { Header } from '../components/Header'
import { Balance } from '../components/Balance'
import { IncomeExpenses } from '../components/IncomeExpenses'
import { TransactionList } from '../components/TransactionList';
import { AddTransaction } from '../components/AddTransaction';


export const Layout = () => {

  return (
    <div className="container">
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </div>
  )
}
