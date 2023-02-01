import React from 'react'
import "./table.scss"

function Table({ accounts, editAccount, deleteAccount }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Full name</th>
                    <th>Credit card</th>
                    <th>Phone</th>
                    <th>Deposit</th>
                    <th>Edit/Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    accounts.map((account, index) => {
                        return <tr key={index}>
                            <td>{account.fullName}</td>
                            <td>{account.creditCard}</td>
                            <td>{account.phone}</td>
                            <td>{account.deposit}</td>
                            <td>
                                <button className='btn btn-warning btn-sm me-2' onClick={() => editAccount(index)}>Edit</button>
                                <button className='btn btn-danger btn-sm' onClick={() => deleteAccount(index)}>Delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
            
            <tfoot>
                <tr>
                    <td className='text-end' colSpan={4}>Number accounts: </td>
                    <td>{accounts.length}</td>
                </tr>
            </tfoot>
        </table>
    )
}

export default Table
