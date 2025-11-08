import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Completed", value: 2 },
  { name: "Ongoing", value: 2 },
  { name: "Pending", value: 1 },
];

const budgetData = [
  { department: "Transport", budget: 2.5 },
  { department: "IT", budget: 3.2 },
  { department: "Sanitation", budget: 1.1 },
  { department: "Energy", budget: 1.8 },
  { department: "Admin", budget: 0.9 },
];

const COLORS = ["#22c55e", "#eab308", "#94a3b8"];

export default function Dashboard() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          📈 Project Insights Dashboard (Dehradun)
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Pie Chart */}
          <div className="bg-gray-50 rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-center mb-4 text-gray-700">
              Project Status Overview
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-gray-50 rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-center mb-4 text-gray-700">
              Budget Allocation by Department (₹ Cr)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={budgetData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="department" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="budget" fill="#3b82f6" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
