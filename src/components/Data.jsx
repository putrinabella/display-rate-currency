import React, { useEffect, useState } from "react";
import { fetchCurrencyData } from "../api/api-endpoint";
import headerImage from "../assets/img/header.png";

const Data = () => {
  const [currencyData, setCurrencyData] = useState([]);

  useEffect(() => {
    const getCurrency = async () => {
      const data = await fetchCurrencyData();
      setCurrencyData(data);
    };

    getCurrency();
  }, []);

  return (
    <div className="flex flex-col items-center px-10">
      <table className="min-w-full border-collapse border overflow-x-auto font-roboto text-center">
        <thead>
          <tr className="bg-slate-200">
            <th className="border border-slate-300 px-4 py-2 w-1/4">
              Currency
            </th>
            <th className="border border-slate-300 px-4 py-2 w-1/4">We Buy</th>
            <th className="border border-slate-300 px-4 py-2 w-1/4">
              Exchange Rate
            </th>
            <th className="border border-slate-300 px-4 py-2 w-1/4">We Sell</th>
          </tr>
        </thead>
        <tbody>
          {currencyData.map(({ currency, buy, exchangeRate, sell }) => (
            <tr key={currency}>
              <td className="border border-slate-300 px-4 py-2">{currency}</td>
              <td className="border border-slate-300 px-4 py-2">{buy}</td>
              <td className="border border-slate-300 px-4 py-2">
                {exchangeRate}
              </td>
              <td className="border border-slate-300 px-4 py-2">{sell}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className="hidden lg:block p-0">
        <img src={headerImage} alt="Header Image" className="w-full" />
      </div> */}
    </div>
  );
};

export default Data;
