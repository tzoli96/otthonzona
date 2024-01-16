import React, {useEffect, useState} from "react";
import Layout from "../Elements/AppLayout";
import Loading from "../Elements/Loading";
import HistoryRow from "./HistoryRow";
import {request} from "../../utils/request";

function CreditPurchaseHistory({}) {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    request("/api/user/credit-purchase-history")
        .then((data) => {
          setLoading(false);
          setHistory(data.data);
        })
        .catch((err) => {
          setLoading(false);
        });
  }, []);

  return (
      <>
        <Layout selected={6}>
          <div className="p-4 md:p-8">
            <p className="text-xl font-semibold">
              Korábbi vásárlásaim
            </p>
            {loading ? (
                <div className="flex justify-center h-48 items-center my-8 gap-4 font-medium text-gray-900">
                  <Loading/>
                  <span>A lista betöltése folyamatban van</span>
                </div>
            ) : (
                <div className="w-full card !rounded-3xl my-8 p-6">
                  <div className="flex !flex-row border-b-2 pb-4 mb-4">
                    <div className="font-bold py-1 pr-2 my-1 w-5/12 lg:w-1/5">Dátum</div>
                    <div className="font-bold py-1 pr-2 my-1 w-5/12 lg:w-1/5">Státusz</div>
                    <div className="font-bold py-1 pr-2 my-1 w-1/5 hidden lg:block">Tranzakció azonosító</div>
                    <div className="font-bold py-1 pr-2 my-1 w-1/5 hidden lg:block">Vásárolt kredit</div>
                    <div className="font-bold py-1 pr-2 my-1 w-1/5 hidden lg:block">Elköltött összeg</div>
                    <div className="font-bold py-1 pr-2 my-1 w-2/12 block lg:hidden">&nbsp;</div>
                  </div>

                  {history.map((history) => (
                      <HistoryRow
                          history={history}
                      />
                  ))}
                </div>
            )}
          </div>
        </Layout>
      </>
  );
}

export default CreditPurchaseHistory;
