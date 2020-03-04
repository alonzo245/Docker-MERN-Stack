import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

//Initiallization
const initialState = {
    transactions: [
        // { id: 1, text: 'Flower', amount: -20 },
        // { id: 2, text: 'Salary', amount: 300 },
        // { id: 3, text: 'Book', amount: -10 },
        // { id: 4, text: 'Camera', amount: 150 }
    ],
    error: null,
    loading: true
}

//Create context
export const GlobalContext = createContext(initialState)

//Provider
export const GlobalProvider = ({ children }) => {
    const url = `http://localhost:5000`
    const [state, dispatch] = useReducer(AppReducer, initialState)


    //Actions
    async function getTransactions() {
        try {
            const aaa = await axios.get(`${url}/api/v1/transactions`)
            const res = await axios.get(`${url}/api/v1/transactions`)
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            })

        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response
            })
        }
    }
    async function deleteTransaction(id) {
        try {
            await axios.delete(`${url}/api/v1/transactions/${id}`)
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            })

        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.error
            })
        }
    }

    async function addTransaction(transaction) {
        try {
            const res = await axios.post(`${url}/api/v1/transactions`,
                transaction,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data
            })

        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.error
            })
        }
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        loading: state.loading,
        error: state.error,
        getTransactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}