import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

import { Chart } from "react-chartjs-2";
import { fetchMonthlyExpenses } from "../../redux/slices/userStats/userStats";
import LoadingComponent from "../LoadingComponent";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const LineGraph = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMonthlyExpenses());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const monthlyExpenseData = useSelector((state) => state?.userStat);
    const { loading, statExpData, appErr, serverErr } = monthlyExpenseData;

    const expensesByMonth = Array(12).fill(0);
    statExpData?.forEach((entry) => {
        const monthIndex = entry._id.month - 1;
        expensesByMonth[monthIndex] = entry.totalExpenses;
    });

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Monthly Expenses",
            },
        },
    };
    const labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const data = {
        labels,
        datasets: [
            {
                type: 'line',
                label: "Expenses",
                data: expensesByMonth,
                borderColor: "rgba(255, 99, 132, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
                type: 'bar',
                label: 'Expenses',
                data: expensesByMonth,
                backgroundColor: 'rgb(75, 192, 192)',
              },
        ],
    };

    return (
        <>
            {loading ? <LoadingComponent /> : <Chart options={options} data={data}/>}
        </>
    );
};

export default LineGraph;
