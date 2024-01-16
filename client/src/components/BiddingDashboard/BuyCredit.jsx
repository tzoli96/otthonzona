import React, { useState } from "react";
import Input from "../Elements/Input";
import { loadStripe } from "@stripe/stripe-js";
import { request } from "../../utils/request";

function BuyCredit({ close }) {
  const [currency, setCurrency] = useState(5000);
  const [credit, setCredit] = useState(2500);
  const [rate, setRate] = useState(0.5);

  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51ORwQUFi7ANkKRs4yAe0ZyAS2MkZ7bqgFYKdFAPOx91CegdFtH2ujlDOkIwZA3c5g5Vhf5e1L2H8QKusFC8oSCbC00hKN0hppk"
    );

    // todo: 5000?
    if (currency < 1000) {
      return alert("Minimum 2500 kreditet kell vásárolni!");
    }

    const body = {
      amount: credit,
      currency,
      product: "OtthonZóna Kredit",
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const session = await request("/api/user/create-checkout-session", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <div className="w-full md:w-[480px] h-[400px] rounded-lg bg-white p-8">
      <div>
        <span className="text-2xl font-semibold">Kredit vásárlása</span>
        {close && (
          <span
            className="float-right text-2xl font-bold cursor-pointer"
            onClick={close}
          >
            ✕
          </span>
        )}
      </div>
      <div className="h-[320px] flex justify-center items-center">
        <div className="w-full">
          <p className="my-1 text-md font-semibold">Összeg (Ft)</p>
          <Input
            placeholder={"Összeg"}
            value={currency}
            type="number"
            onChange={(e) => {
              setCurrency(e.target.value);
              setCredit(parseInt(e.target.value) * rate);
            }}
          />
          <p className="mt-4 my-1 text-md font-semibold">Kreditmennyiség</p>
          <Input
            placeholder={"Vásárolandó kredit mennyisége"}
            value={credit}
            type="number"
            onChange={(e) => {
              setCredit(e.target.value);
              setCurrency(parseInt(e.target.value) / rate);
            }}
          />
          <div className="mt-6">
            <button className="orange-button !w-full" onClick={makePayment}>
              Vásárlás
            </button>
            <p className="mt-4 my-1 text-center text-sm">
              A megjelenített ár az ÁFA-t nem tartalmazza.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BuyCreditModal({ close }) {
  return (
    <div className="p-8 fixed top-0 left-0 z-40 bg-gray-600 bg-opacity-50 w-[100vw] h-[100vh] flex justify-center items-center">
      <BuyCredit close={close} />
    </div>
  );
}

export default BuyCredit;
