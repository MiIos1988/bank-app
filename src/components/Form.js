import React from 'react'

function Form({ inputData, inputHandler, addHandler, changeHandler, isEdit }) {
    return (
        <div className="row">
            <div className="col-6 offset-3">
                <h1 className='display-4' >Bank-app</h1>
                <input type="text" name="fullName" placeholder='Full name' className='form-control mb-3' onInput={inputHandler} value={inputData.fullName} />
                <input type="text" name="creditCard" placeholder='Credit card' className='form-control mb-3' onChange={inputHandler} value={inputData.creditCard} />
                <input type="text" name="phone" placeholder='Phone' className='form-control mb-3' onChange={inputHandler} value={inputData.phone} />
                <input type="text" name="deposit" placeholder='Deposit' className='form-control mb-3' onChange={inputHandler} value={inputData.deposit} />
                {
                    isEdit ?
                        <button className='btn btn-primary w-50' onClick={addHandler}>Add</button>
                        :
                        <button className='btn btn-secondary w-50' onClick={changeHandler}>Change</button>
                }
            </div>
        </div>
    )
}

export default Form

