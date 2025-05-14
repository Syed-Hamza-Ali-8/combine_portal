// app/task/page.tsx
"use client";

import { useState } from "react";
import Sidebar from "../../components/SideBar-vol";

const TaskPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Mobile Sidebar Toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-orange-600 text-white"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 md:ml-64">
        {/* Page Header with left padding for mobile */}
        <div className="flex justify-between items-center mb-8 pl-10 md:pl-0">
          <h1 className="text-2xl md:text-3xl font-bold text-orange-600">
            TASKS
          </h1>
        </div>

        {/* Task Cards */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {/* First Task */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800">FIRST TASK</h2>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  Lorem
                </h3>
                <p className="text-gray-600">
                  Lorem Ipsum is Simply Dummy Text Of The Printing And
                  Typesetting Industry.
                </p>
              </div>
              <button className="w-full md:w-auto px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
                Upload File
              </button>
            </div>
          </div>

          {/* Third Task */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800">THIRD TASK</h2>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  Lorem
                </h3>
                <p className="text-gray-600">
                  Lorem Ipsum is Simply Dummy Text Of The Printing And
                  Typesetting Industry.
                </p>
              </div>
              <button className="w-full md:w-auto px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
                Upload File
              </button>
            </div>
          </div>

          {/* Second Task */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800">SECOND TASK</h2>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  Lorem
                </h3>
                <p className="text-gray-600">
                  Lorem Ipsum is Simply Dummy Text Of The Printing And
                  Typesetting Industry.
                </p>
              </div>
              <button className="w-full md:w-auto px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
                Upload File
              </button>
            </div>
          </div>

          {/* Fourth Task */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800">FOURTH TASK</h2>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  Lorem
                </h3>
                <p className="text-gray-600">
                  Lorem Ipsum is Simply Dummy Text Of The Printing And
                  Typesetting Industry.
                </p>
              </div>
              <button className="w-full md:w-auto px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
                Upload File
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TaskPage;
