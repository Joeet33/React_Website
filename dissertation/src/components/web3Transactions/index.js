import { useState } from "react";
import {ErrorMessage} from "../error_message";
import { TxList } from "../tx_list"
import { useContext } from "react"
import { TransactionContext } from "../../context/TransactionContext"
import { TransactionsForm } from "./index.styles";
import { Navigate } from "react-router";
import { ROUTER_PATHS } from "../../routerPaths";

export const Transactions = () => {
  const { startPayment } = useContext(TransactionContext)

  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError();
    await startPayment({
      setError,
      setTxs,    
    });
  };

  return (
    <>
    <TransactionsForm onClick={handleSubmit}>
     
            Pay Now
          
          <TxList txs={txs} />
      
    </TransactionsForm> 
<ErrorMessage message={error} />
    </>
  );
}