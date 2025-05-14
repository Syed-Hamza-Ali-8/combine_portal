"use client";

import Sidebar from "../../components/SideBar-vol";
import { useState } from "react";

const LecturePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const videos = [
    {
      id: 1,
      title: "Introduction to Volunteering",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://www.youtube.com/embed/example1",
    },
    {
      id: 2,
      title: "Community Engagement Basics",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "https://www.youtube.com/embed/example2",
    },
    {
      id: 3,
      title: "Advanced Volunteer Techniques",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      url: "https://www.youtube.com/embed/example3",
    },
  ];

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
        {/* Page Header */}
        <div className="flex justify-between items-center mb-8 pl-10 md:pl-0">
          <h1 className="text-2xl md:text-3xl font-bold text-orange-600">
            LECTURE MATERIALS
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

        {/* Video Lectures Section */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            Video Lectures
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={video.url}
                    className="w-full h-48 md:h-56"
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LecturePage;
