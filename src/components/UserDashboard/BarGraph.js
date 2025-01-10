import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import {
    fetchMonthlyExpenses,
    fetchMonthlyIncome,
} from "../../redux/slices/userStats/userStats";
import LoadingComponent from "../LoadingComponent";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarGraph = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMonthlyExpenses());
        dispatch(fetchMonthlyIncome());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const Data = useSelector((state) => state?.userStat);
    const { loading, statExpData, statIncData, appErr, serverErr } = Data;

    const expensesByMonth = Array(12).fill(0);
    const IncomeByMonth = Array(12).fill(0);

    statExpData?.forEach((entry) => {
        const monthIndex = entry._id.month - 1;
        expensesByMonth[monthIndex] = entry.totalExpenses;
    });
    statIncData?.forEach((entry) => {
        const monthIndex = entry._id.month - 1;
        IncomeByMonth[monthIndex] = entry.totalIncome;
    });

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Expenses Vs Income",
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
                label: "Expenses",
                data: expensesByMonth,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
                label: "Income",
                data: IncomeByMonth,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(14, 61, 34, 0.5)",
            },
        ],
    };
    return (
        <>
            {loading ? <LoadingComponent /> : <Bar options={options} data={data} />}
        </>
    );
};

export default BarGraph;
