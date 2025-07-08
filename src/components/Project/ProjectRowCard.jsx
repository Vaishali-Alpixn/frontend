import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ProjectRowCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between mb-3">

      <div className="flex items-center gap-4 w-1/4">
        <div className="w-10 h-10 bg-indigo-600 text-white rounded-md flex items-center justify-center text-xl font-bold">
          P
        </div>
        <div>
          <h3 className="font-semibold text-green-600">Project xyz</h3>
          <p className="text-sm text-gray-500">Client 123</p>
        </div>
      </div>

      <div className="text-sm text-indigo-500 w-[120px]">Due 30/08/25</div>


      <div className="flex items-center gap-2 w-1/4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full" style={{ width: "74%" }}></div>
        </div>
        <span className="text-sm text-green-600">74%</span>
      </div>

        <div>
          <p className="text-sm text-gray-500 font-medium mb-1">Team</p>
          <div className="flex items-center gap-1">
            <FaUserCircle className="text-orange-500 text-lg" />
            <FaUserCircle className="text-purple-500 text-lg" />
            <FaUserCircle className="text-green-500 text-lg" />
            <div className="bg-purple-600 text-white text-xs rounded-md px-2 py-0.5">+4</div>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-500 font-medium mb-1">Status</p>
          <p className="text-sm text-blue-600 font-medium">In Progress</p>
        </div>

        <div>
          <p className="text-sm text-gray-500 font-medium mb-1">AI Health</p>
          <p className="text-sm text-gray-800">Indicator</p>
        </div>

      <div className="flex justify-end">
          <span className="text-green-700 text-xs px-5 py-1 rounded-md ">
            ✅ Healthy
          </span>
        </div>
    </div>
  );
};

export default ProjectRowCard;
