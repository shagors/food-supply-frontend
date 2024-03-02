import { useGetSuppliesQuery } from "@/redux/features/supplies/suppliesApi";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { CSSProperties } from "react";
import { Pie } from "react-chartjs-2";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

type TSupplyItem = {
  _id: string;
  image: string;
  title: string;
  category: string;
  quantity: string | number;
  description: string;
  createdAt: string;
};

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const { data, isLoading, isError } = useGetSuppliesQuery(undefined);

  const categories = data?.data?.map((item: TSupplyItem) => item.category);
  const quantities = data?.data?.map((item: TSupplyItem) => item.quantity);

  if (isLoading) {
    return (
      <p className="text-4xl text-gray-500 font-thin text-center mt-36">
        <ClipLoader cssOverride={override} color="#36d7b7" size={60} />
      </p>
    );
  }

  if (isError) {
    return (
      <p className="text-4xl text-red-500 font-thin text-center mt-16">
        Something went wrong data fetching try again later !!
      </p>
    );
  }

  // Creating a data object for Chart.js
  const chartData = {
    labels: categories,
    datasets: [
      {
        data: quantities,
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(54, 102, 35, 1)",
          "rgba(55, 199, 152, 1)",
          "rgba(15, 19, 102, 1)",
          "rgba(200, 200, 200, 1)",
          "rgba(23, 129, 12, 1)",
          "rgba(2, 19, 222, 1)",
          "rgba(110, 110, 110, 1)",
          "rgba(250, 0, 110, 1)",
          "rgba(0, 255, 255, 1)",
        ],
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
          "rgba(255, 159, 64, 0.7)",
          "rgba(54, 102, 35, 0.7)",
          "rgba(55, 199, 152, 0.7)",
          "rgba(15, 19, 102, 0.7)",
          "rgba(200, 200, 200, 0.7)",
          "rgba(23, 129, 12, 0.7)",
          "rgba(2, 19, 222, 0.7)",
          "rgba(110, 110, 110, 0.7)",
          "rgba(250, 0, 110, 0.7)",
          "rgba(0, 255, 255, 0.7)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="text-4xl text-center mt-4 mb-10 text-slate-400">
        Our All Food Supplies
      </h1>
      <div className="w-full h-[650px] flex items-center justify-center">
        <Pie height={600} data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;
