import './App.scss';
import { useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';

const initInputData = {
  fullName: '',
  creditCard: '',
  phone: '',
  deposit: ''
}

function App() {
  const [inputData, setInputData] = useState(initInputData);

  const [accounts, setAccounts] = useState(() => {
    if (localStorage.hasOwnProperty("accounts")) {
      return JSON.parse(localStorage.getItem("accounts"))
    } else {
      return []
    }
  });
  const [isEdit, setIsEdit] = useState(true);
  const [currentAccount, setCurrentAccount] = useState(null);

  const inputHandler = (e) => {
    let copyInputData = { ...inputData }
    copyInputData[e.target.name] = e.target.value;
    setInputData(copyInputData);

  }

  const addHandler = () => {
    let copyAccounts = [...accounts, inputData]
    setAccounts(copyAccounts)
    setInputData(initInputData)
    console.log(copyAccounts);
    localStorage.accounts = JSON.stringify(copyAccounts)

  }

  const editAccount = (index) => {
    setInputData(accounts[index]);
    setIsEdit(false)
    setCurrentAccount(index)
  }

  const deleteAccount = (index) => {
    let copyAccounts = [...accounts]
    copyAccounts.splice(index, 1)
    setAccounts(copyAccounts);
    localStorage.accounts = JSON.stringify(copyAccounts)

  }

  const changeHandler = (e) => {
    let copyAccounts = [...accounts];
    copyAccounts[currentAccount] = inputData;
    setAccounts(copyAccounts)
    setInputData(initInputData)
    setIsEdit(true)
    localStorage.accounts = JSON.stringify(copyAccounts)
  }

  return (
    <>
      <div className="container text-center py-5">

        <Form inputData={inputData} inputHandler={inputHandler} addHandler={addHandler} changeHandler={changeHandler} isEdit={isEdit} />
        <div className="row mt-5  accounts-table">
          <div className="col-8 offset-2">
            {
              accounts.length !== 0 &&
              <Table accounts={accounts} editAccount={editAccount} deleteAccount={deleteAccount} />
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
