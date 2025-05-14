// app/course/page.tsx
"use client";

import { useState } from "react";
import Sidebar from "../../components/SideBar-vol";

const CoursePage = () => {
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
            COURSES
          </h1>
          <button title="bttn" className="p-2 rounded-full hover:bg-gray-100">
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
        </div>

        {/* Course Cards */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {/* First Course */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                  FIRST COURSE
                </span>
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Lorem
                </h3>
                <p className="text-gray-600">
                  Lorem Ipsum is Simply Dummy Text Of The Printing And
                  Typesetting Industry.
                </p>
              </div>
              <button
                title="bttn"
                className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg"
              >
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
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Second Course */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                  SECOND COURSE
                </span>
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Lorem
                </h3>
                <p className="text-gray-600">
                  Lorem Ipsum is Simply Dummy Text Of The Printing And
                  Typesetting Industry.
                </p>
              </div>
              <button
                title="bttn"
                className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg"
              >
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
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Third Course */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                  THIRD COURSE
                </span>
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Lorem
                </h3>
                <p className="text-gray-600">
                  Lorem Ipsum is Simply Dummy Text Of The Printing And
                  Typesetting Industry.
                </p>
              </div>
              <button
                title="bttn"
                className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg"
              >
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
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Fourth Course */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                  FOURTH COURSE
                </span>
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Lorem
                </h3>
                <p className="text-gray-600">
                  Lorem Ipsum is Simply Dummy Text Of The Printing And
                  Typesetting Industry.
                </p>
              </div>
              <button
                title="bttn"
                className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg"
              >
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
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CoursePage;
