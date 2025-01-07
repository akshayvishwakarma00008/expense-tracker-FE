import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required elements
ChartJS.register(ArcElement, Tooltip, Legend);

const DataGrap = ({ income, expenses }) => {
  const data = {
    labels: ["Expenses", "Income"],
    datasets: [
      {
        label: "# of Transactions",
        data: [expenses, income],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div
      style={{
        display: "flex",
        height: "auto",
        width: "40%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "40px",
      }}
    >
      <div>
        <h3>Transactions</h3>
      </div>
      <Pie data={data} />
    </div>
  );
};

export default DataGrap;
