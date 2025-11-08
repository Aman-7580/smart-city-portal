import React from "react";

const projects = [
  {
    id: 1,
    name: "Integrated Command and Control Centre",
    department: "Information Technology",
    budget: "₹3.2 Cr",
    status: "Completed",
    progress: 100,
  },
  {
    id: 2,
    name: "Smart Traffic Management System",
    department: "Transport",
    budget: "₹2.5 Cr",
    status: "Ongoing",
    progress: 70,
  },
  {
    id: 3,
    name: "Smart Street Lighting Project",
    department: "Energy",
    budget: "₹1.8 Cr",
    status: "Completed",
    progress: 100,
  },
  {
    id: 4,
    name: "Smart Waste Management Solution",
    department: "Sanitation",
    budget: "₹1.1 Cr",
    status: "Ongoing",
    progress: 55,
  },
  {
    id: 5,
    name: "e-Governance Citizen Service Portal",
    department: "Administration",
    budget: "₹0.9 Cr",
    status: "Pending",
    progress: 20,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Dehradun Smart City Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-1">
                <strong>Department:</strong> {project.department}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Budget:</strong> {project.budget}
              </p>
              <p className="text-gray-600 mb-3">
                <strong>Status:</strong>{" "}
                <span
                  className={
                    project.status === "Completed"
                      ? "text-green-600"
                      : project.status === "Ongoing"
                      ? "text-yellow-600"
                      : "text-gray-500"
                  }
                >
                  {project.status}
                </span>
              </p>

              {/* 📊 Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                <div
                  className={`h-3 rounded-full ${
                    project.progress === 100
                      ? "bg-green-500"
                      : project.progress > 0
                      ? "bg-blue-500"
                      : "bg-gray-400"
                  }`}
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>

              <p className="text-sm text-gray-500">
                Progress: {project.progress}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
