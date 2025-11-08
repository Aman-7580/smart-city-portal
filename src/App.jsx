import React, { useEffect, useState } from "react";
import "./index.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";
import { motion } from "framer-motion";

function App() {
  const [analyticsData, setAnalyticsData] = useState(null);

  // ✅ Fetch live data from Flask backend
  useEffect(() => {
    const fetchData = () => {
      fetch("http://127.0.0.1:5000/api/analytics")
        .then((res) => res.json())
        .then((data) => setAnalyticsData(data))
        .catch((err) => console.error("Error fetching analytics data:", err));
    };
    fetchData();
    const interval = setInterval(fetchData, 5000); // auto refresh every 5s
    return () => clearInterval(interval);
  }, []);

  // 🔄 Loading UI
  if (!analyticsData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 text-gray-700">
        <p className="text-lg font-semibold animate-pulse">
          Fetching Smart City Data...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-poppins text-gray-900 bg-gray-50">
      {/* 🔹 Header */}
      <Header />

      {/* 🔹 Welcome Section */}
      <section id="home" className="text-center py-10 px-6">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">
          Welcome to Dehradun Smart City Portal 🏙️
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          Explore real-time progress, budgets, and development insights for
          Dehradun Smart City projects. Empowering citizens with open data and
          transparency.
        </p>
      </section>

      {/* 🔹 Smart City Projects */}
      <section
        id="projects"
        className="px-6 md:px-12 py-8 max-w-6xl mx-auto bg-white shadow-md rounded-lg"
      >
        <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
          Dehradun Smart City Projects Overview
        </h3>

        <div className="space-y-6">
          <ProjectCard
            name="Integrated Command and Control Centre"
            dept="Information Technology"
            budget="₹3.2 Cr"
            status="Completed"
            progress={100}
            color="bg-green-600"
          />
          <ProjectCard
            name="Smart Traffic Management System"
            dept="Transport"
            budget="₹2.5 Cr"
            status="Ongoing"
            progress={70}
            color="bg-yellow-500"
          />
        </div>
      </section>

      {/* 🔹 Dashboard */}
      <section
        id="dashboard"
        className="bg-gray-50 py-12 px-6 md:px-12 border-t border-gray-300"
      >
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Dehradun Smart City Dashboard 📊
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          <ProjectCard
            name="Integrated Command and Control Centre"
            dept="IT"
            budget="₹3.2 Cr"
            progress={100}
            color="bg-green-600"
          />
          <ProjectCard
            name="Smart Traffic Management System"
            dept="Transport"
            budget="₹2.5 Cr"
            progress={70}
            color="bg-yellow-500"
          />
          <ProjectCard
            name="Urban Green Spaces Development"
            dept="Urban Affairs"
            budget="₹1.8 Cr"
            progress={45}
            color="bg-blue-600"
          />
        </div>
      </section>

      {/* 🔹 Analytics */}
      <section
        id="analytics"
        className="bg-white py-16 px-6 md:px-12 border-t border-gray-200"
      >
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Smart City Performance Analytics 📈
        </h2>

        <AnimatedStats stats={analyticsData} />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          <ChartSection data={analyticsData} />
        </div>
      </section>

      {/* 🔹 Government Section */}
      <section id="government" className="bg-gray-100 py-12 mt-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">
          Government of Uttarakhand
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 place-items-center">
          <GovCard
            img="/governor.jpg"
            name="Lt. Gen. Gurmit Singh (Retd.)"
            title="Governor of Uttarakhand"
          />
          <GovCard
            img="/cm.jpg"
            name="Shri Pushkar Singh Dhami"
            title="Chief Minister of Uttarakhand"
          />
          <GovCard
            img="/speaker.jpg"
            name="Smt. Ritu Khanduri Bhushan"
            title="Speaker, Uttarakhand Legislative Assembly"
          />
        </div>
      </section>

      {/* 🔹 Footer */}
      <Footer />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Reusable Parts                               */
/* -------------------------------------------------------------------------- */

const Header = () => (
  <header className="bg-white border-b-4 border-blue-900 shadow-sm">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4">
      <div className="flex items-center space-x-4">
        <img
          src="/uttarakhand-logo.png"
          alt="Uttarakhand Logo"
          className="h-20 w-auto"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-900">उत्तराखंड सरकार</h1>
          <p className="text-sm text-gray-700">Government of Uttarakhand</p>
        </div>
      </div>

      <div className="flex space-x-2 mt-4 md:mt-0">
        {["A-", "A", "A+", "हिन्दी में"].map((btn) => (
          <button
            key={btn}
            className="border px-2 py-1 text-xs hover:bg-blue-100 transition"
          >
            {btn}
          </button>
        ))}
      </div>
    </div>

    <nav className="bg-blue-900 text-white sticky top-0 z-50 shadow-md">
      <ul className="flex flex-wrap justify-center gap-5 py-3 text-sm md:text-base font-medium">
        {[
          "Home",
          "Projects",
          "Dashboard",
          "Analytics",
          "Government",
          "Contact",
        ].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-yellow-300 transition"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

const ProjectCard = ({ name, dept, budget, progress, color }) => (
  <div>
    <h3 className="font-semibold text-lg mb-2">{name}</h3>
    <p className="text-sm text-gray-600 mb-1">
      Department: {dept} | Budget: {budget}
    </p>
    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
      <div
        className={`${color} h-3 rounded-full transition-all duration-700`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
    <p className="text-sm mt-1 font-semibold text-gray-700">
      Progress: {progress}%
    </p>
  </div>
);

function AnimatedStats({ stats }) {
  const Counter = ({ value }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let start = 0;
      const end = value;
      const timer = setInterval(() => {
        start += Math.ceil(end / 40);
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(start);
      }, 30);
      return () => clearInterval(timer);
    }, [value]);
    return <span>{count}</span>;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12 text-center">
      <StatCard
        color="text-blue-700"
        label="Total Projects"
        value={<Counter value={stats.totalProjects} />}
      />
      <StatCard
        color="text-green-700"
        label="Completed"
        value={<Counter value={stats.completed} />}
      />
      <StatCard
        color="text-yellow-600"
        label="Ongoing"
        value={<Counter value={stats.ongoing} />}
      />
      <StatCard
        color="text-purple-700"
        label="Investment"
        value={`₹${stats.investment} Cr`}
      />
    </div>
  );
}

const StatCard = ({ color, label, value }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="bg-gray-50 p-6 rounded-xl shadow-md"
  >
    <h3 className={`text-4xl font-bold ${color}`}>{value}</h3>
    <p className="text-sm text-gray-600 mt-2">{label}</p>
  </motion.div>
);

function ChartSection({ data }) {
  return (
    <>
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-center mb-4 text-gray-800">
          Project Completion Overview
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={[
                { name: "Completed", value: data.completed },
                { name: "Ongoing", value: data.ongoing },
                {
                  name: "Upcoming",
                  value: Math.max(
                    data.totalProjects - (data.completed + data.ongoing),
                    0
                  ),
                },
              ]}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#4f46e5"
              dataKey="value"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-center mb-4 text-gray-800">
          Department-wise Project Budgets
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.departments}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="department" />
            <YAxis
              label={{ value: "Cr ₹", angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="budget" fill="#2563eb" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

const GovCard = ({ img, name, title }) => (
  <div className="bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-xs transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
    <img src={img} alt={name} className="w-full h-64 object-cover" />
    <div className="p-4 text-center">
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-700">{title}</p>
    </div>
  </div>
);

const Footer = () => (
  <footer id="contact" className="bg-blue-900 text-white mt-16 pt-10 pb-6">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      <div>
        <h3 className="text-xl font-semibold mb-4 text-yellow-400">
          About the Portal
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          The Dehradun Smart City Portal is a digital initiative by the
          Government of Uttarakhand to promote transparency, accessibility, and
          citizen engagement through open data and smart urban solutions.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 text-yellow-400">
          Quick Links
        </h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          {[
            ["🏠 Home", "#home"],
            ["📄 Projects", "#projects"],
            ["📊 Dashboard", "#dashboard"],
            ["📈 Analytics", "#analytics"],
            ["👥 Government", "#government"],
          ].map(([label, link]) => (
            <li key={label}>
              <a href={link} className="hover:text-yellow-400 transition">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 text-yellow-400">
          Contact Us
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          📍 <strong>Dehradun Smart City Limited</strong>
          <br />
          777 Kaulagarh Road, Dehradun, Uttarakhand - 248001
          <br />
          ☎️ +91-135-271-2570
          <br />
          ✉️ smartcity@ddn.uk.gov.in
        </p>
      </div>
    </div>

    <div className="border-t border-gray-600 mt-10 pt-4 text-center text-gray-400 text-sm">
      © {new Date().getFullYear()} Government of Uttarakhand | Dehradun Smart
      City Portal
      <br />
      Designed & Developed by{" "}
      <span className="text-yellow-400 font-semibold">Aman Panwar</span>
    </div>
  </footer>
);

export default App;
