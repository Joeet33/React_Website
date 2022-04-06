import { useState } from "react";
import {ErrorMessage} from "../error_message";
import { TxList } from "../tx_list"
import { useContext } from "react"
import { TransactionContext } from "../../context/TransactionContext"

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
    <form className="m-4" onSubmit={handleSubmit}>
      <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
        <main className="mt-4 p-4">
          <h1 className="text-xl font-semibold text-gray-700 text-center">
            Send ETH payment
          </h1>
          <div className="">
          </div>
        </main>
        <footer className="p-4">
          <button
            type="submit"
            className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
          >
            Pay now
          </button>
          <ErrorMessage message={error} />
          <TxList txs={txs} />
        </footer>
      </div>
    </form>
  );
}