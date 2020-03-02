import React, { useContext, useEffect } from 'react'
import { Transaction } from './Transaction'
import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {
    const { transactions, getTransactions } = useContext(GlobalContext)


    useEffect(() => {
        getTransactions()
    }, [])

    if (!Array.isArray(transactions)) return (<div></div>)

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map((item, i) => <Transaction key={i} transaction={item} />)}
            </ul>
        </>
    )
}
