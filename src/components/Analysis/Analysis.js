import React from "react";
import { useLoaderData } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

// chart
const Analysis = () => {
  const informations = useLoaderData();
  const allInformations = informations.data;
  console.log(allInformations);
  return (
    <div className="flex justify-center">
      <div>
        <h2 className="text-3xl p-3 bg-slate-200 rounded-lg text-center m-5">
          Rechart
        </h2>
        <LineChart width={400} height={400} data={allInformations}>
          <Line type="monotone" dataKey="total" stroke="#82ca9d" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default Analysis;
