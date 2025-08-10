// src/pages/Admin.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { User } from "lucide-react";

const Admin = () => {
  // Example dynamic data for Recharts
  const salesData = [
    { name: "Product A", sales: 120, color: "#3B82F6" }, // blue-500
    { name: "Product B", sales: 90, color: "#22C55E" },  // green-500
    { name: "Product C", sales: 150, color: "#EAB308" }, // yellow-500
    { name: "Product D", sales: 80, color: "#EF4444" }   // red-500
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center rounded-md">
        <h1 className="text-2xl font-bold text-gray-700">Admin Dashboard</h1>
        <span className="text-sm text-gray-500 flex items-center gap-2">
          <User className="w-4 h-4 text-gray-500" /> Welcome, Admin
          <button className="btn btn-neutral ml-3">LogOut</button>
        </span>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="bg-white p-4 rounded-md shadow text-center">
          <h2 className="text-lg font-semibold text-gray-600">Today's Sales</h2>
          <p className="text-2xl font-bold text-green-600">৳20,500</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow text-center">
          <h2 className="text-lg font-semibold text-gray-600">Weekly Sales</h2>
          <p className="text-2xl font-bold text-blue-600">৳85,000</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow text-center">
          <h2 className="text-lg font-semibold text-gray-600">Monthly Sales</h2>
          <p className="text-2xl font-bold text-purple-600">৳320,000</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow text-center">
          <h2 className="text-lg font-semibold text-gray-600">Total Stock Items</h2>
          <p className="text-2xl font-bold text-red-600">1,200</p>
        </div>
      </div>

      {/* Charts & Stock Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Dynamic Bar Chart with Recharts */}
        <div className="bg-white p-6 rounded-md shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Product Wise Sales (Bar Chart)
          </h2>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="sales"
                  label={{ position: "top" }}
                  isAnimationActive={true}
                >
                  {salesData.map((entry, index) => (
                    <cell
                      key={`cell-${index}`}
                      fill={entry.color}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Product Stock List */}
        <div className="bg-white p-6 rounded-md shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Current Stock
          </h2>
          <ul className="divide-y divide-gray-200 max-h-64 overflow-auto">
            <li className="py-2 flex justify-between">
              <span>Product A</span><span>100 pcs</span>
            </li>
            <li className="py-2 flex justify-between">
              <span>Product B</span><span>80 pcs</span>
            </li>
            <li className="py-2 flex justify-between">
              <span>Product C</span><span>150 pcs</span>
            </li>
            <li className="py-2 flex justify-between">
              <span>Product D</span><span>60 pcs</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Product Entry Form */}
      <div className="bg-white p-6 rounded-md shadow mt-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Add Product to Stock
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <input
            type="text"
            placeholder="Product Name"
            className="p-2 border rounded-md"
            required
          />
          <input
            type="number"
            placeholder="Quantity"
            className="p-2 border rounded-md"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 rounded-md"
          >
            Add / Remove Product
          </button>
        </form>
      </div>

      {/* Product Invoice History */}
      <div className="bg-white p-6 rounded-md shadow mt-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Invoice Details
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-7 gap-4">
          <input
            type="text"
            placeholder="Enter Invoice Number"
            className="p-2 border rounded-md"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 rounded-md"
          >
            Invoice History
          </button>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold p-2 rounded-md"
          >
            Today's Sales
          </button>
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold p-2 rounded-md"
          >
            Weekly Sales
          </button>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold p-2 rounded-md"
          >
            Monthly Sales
          </button>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-bold p-2 rounded-md"
          >
            Total Stock Items Check
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
