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

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError();
    await startPayment({
      setError,
      setTxs,
      setSuccess,     
    });
  };

  return (
    <>
    {!success ? ( <TransactionsForm onSubmit={handleSubmit}>
     
          <button>
            Pay now
          </button>
          <ErrorMessage message={error} />
          <TxList txs={txs} />
      
    </TransactionsForm> ) : (
      <Navigate to={ROUTER_PATHS.PAYMENTSUCCESS} />
    )}

    </>
  );
}