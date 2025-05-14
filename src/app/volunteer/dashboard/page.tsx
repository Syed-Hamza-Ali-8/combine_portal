// app/dashboard/page.tsx
"use client";

import Sidebar from "../../components/SideBar-vol";
import { useState } from "react";

const VolunteerDashboard = () => {
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
            xmlns="http://www.w3.org/2000/svg"
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
            xmlns="http://www.w3.org/2000/svg"
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
        {/* Dashboard Header */}
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h1 className="text-xl md:text-3xl font-bold text-orange-600">
            VOLUNTEER DASHBOARD
          </h1>
          <div className="flex items-center space-x-2 md:space-x-4">
            <button
              title="bttn"
              className="p-1 md:p-2 rounded-full hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-8 md:w-8 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-4 md:space-y-8">
          {/* Lecture Section */}
          <section className="bg-gray-50 p-0 rounded-lg overflow-hidden border border-gray-200">
            <h2 className="text-lg md:text-2xl font-semibold text-white bg-orange-600 px-4 py-2 md:px-6 md:py-3">
              LECTURE
            </h2>
            <div className="p-4 md:p-6 space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-orange-100 p-2 rounded-lg">
                  <svg
                    className="h-6 w-6 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-medium text-gray-800">
                    Upcoming Lectures
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mt-1">
                    Your next lecture is on{" "}
                    <span className="font-semibold">June 15th</span> about
                    &quot;Community Engagement&quot;
                  </p>
                  <button className="mt-2 text-sm text-orange-600 hover:text-orange-700 font-medium">
                    View Schedule →
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Course Section */}
          <section className="bg-gray-50 p-0 rounded-lg overflow-hidden border border-gray-200">
            <h2 className="text-lg md:text-2xl font-semibold text-white bg-orange-600 px-4 py-2 md:px-6 md:py-3">
              COURSE
            </h2>
            <div className="p-4 md:p-6 space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-orange-100 p-2 rounded-lg">
                  <svg
                    className="h-6 w-6 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-medium text-gray-800">
                    Current Courses
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mt-1">
                    You&apos;re enrolled in{" "}
                    <span className="font-semibold">3 courses</span>. Complete
                    modules to earn badges.
                  </p>
                  <div className="mt-3 flex space-x-2">
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                      Volunteering 101
                    </span>
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                      Child Safety
                    </span>
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                      First Aid
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Task Section */}
          <section className="bg-gray-50 p-0 rounded-lg overflow-hidden border border-gray-200">
            <h2 className="text-lg md:text-2xl font-semibold text-white bg-orange-600 px-4 py-2 md:px-6 md:py-3">
              TASK
            </h2>
            <div className="p-4 md:p-6 space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-orange-100 p-2 rounded-lg">
                  <svg
                    className="h-6 w-6 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-medium text-gray-800">
                    Pending Tasks
                  </h3>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center">
                      <input
                        title="inp"
                        type="checkbox"
                        className="rounded text-orange-600 mr-2"
                      />
                      <span className="text-sm md:text-base">
                        Complete training module
                      </span>
                    </li>
                    <li className="flex items-center">
                      <input
                        title="inp"
                        type="checkbox"
                        className="rounded text-orange-600 mr-2"
                      />
                      <span className="text-sm md:text-base">
                        Submit volunteer hours
                      </span>
                    </li>
                    <li className="flex items-center">
                      <input
                        title="inp"
                        type="checkbox"
                        className="rounded text-orange-600 mr-2"
                      />
                      <span className="text-sm md:text-base">
                        Review safety guidelines
                      </span>
                    </li>
                  </ul>
                  <button className="mt-3 text-sm text-orange-600 hover:text-orange-700 font-medium">
                    View All Tasks →
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default VolunteerDashboard;
