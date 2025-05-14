"use client";

import { useState, useEffect } from "react";
import Sidebar from "../../components/SideBar-vol";
import QRCode from "react-qr-code";

interface VolunteerData {
  fullName: string;
  cnic: string;
  email: string;
  volunteerId: string;
  joinDate: string;
}

const VolunteerCard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [volunteerData, setVolunteerData] = useState<VolunteerData | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedData = localStorage.getItem("volunteerData");
    if (storedData) {
      setVolunteerData(JSON.parse(storedData));
    } else {
      // Set dummy data if no data exists
      const currentDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      setVolunteerData({
        fullName: "M. Ali", // Default name
        cnic: "12345-6789012-3", // Default CNIC
        email: "m.ali@example.com",
        volunteerId: "679785", // Default ID
        joinDate: currentDate, // Will use current date
      });
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-screen bg-white">
        <div className="flex-1 p-4 md:p-8">
          <p className="text-gray-500">Loading volunteer data...</p>
        </div>
      </div>
    );
  }

  // Generate QR code data
  const qrData = JSON.stringify({
    name: volunteerData?.fullName,
    id: volunteerData?.volunteerId,
    foundation: "COMBINE FOUNDATION",
  });

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
            VOLUNTEER ID CARD
          </h1>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {/* Front Side */}
          <div className="w-full md:w-96 bg-white border-2 border-orange-500 rounded-lg shadow-lg overflow-hidden">
            {/* Card Header */}
            <div className="bg-white p-4 text-center">
              <h2 className="text-xl font-bold text-black">
                Volunteer ID Card
              </h2>
            </div>

            {/* Card Content */}
            <div className="p-6 space-y-4">
              {/* Volunteer Info Section */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold">
                  • {volunteerData?.fullName}
                </h3>
                <p className="text-sm">• COMBINE FOUNDATION</p>
                <p className="text-sm">• CNIC: {volunteerData?.cnic}</p>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-300 my-4"></div>

              {/* Coordinator Info Section */}
              <div className="pt-2">
                <h4 className="font-medium text-gray-700 mb-3">
                  Co-ordinator and innovation lead
                </h4>
                <div className="space-y-1">
                  <p className="text-sm">
                    • <span className="font-bold">F.O.</span> |{" "}
                    <span className="font-bold">ID:</span>{" "}
                    {volunteerData?.volunteerId}
                  </p>
                  <p className="text-sm">
                    • <span className="font-bold">Join Date:</span>{" "}
                    {volunteerData?.joinDate}
                  </p>
                  <p className="text-sm">
                    • <span className="font-bold">Phone:</span> +92 316 398783
                  </p>
                </div>
              </div>

              {/* Foundation Name */}
              <div className="text-center mt-6">
                <h3 className="text-xl font-bold">COMBINE FOUNDATION</h3>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className="w-full md:w-96 bg-white border-2 border-orange-500 rounded-lg shadow-lg overflow-hidden">
            {/* Card Header */}
            <div className="bg-white p-4 text-center">
              <h2 className="text-xl font-bold text-black">
                Volunteer Information
              </h2>
            </div>

            {/* Card Content */}
            <div className="p-6 space-y-4">
              {/* QR Code Section */}
              <div className="flex justify-center">
                <div className="p-2 border border-gray-200 rounded">
                  <QRCode value={qrData} size={150} level="H" />
                </div>
              </div>

              {/* Volunteer Details */}
              <div className="space-y-1 text-center mt-4">
                <h3 className="text-lg font-bold">{volunteerData?.fullName}</h3>
                <p className="text-sm">
                  <span className="font-bold">ID:</span>{" "}
                  {volunteerData?.volunteerId}
                </p>
                <p className="text-sm">
                  <span className="font-bold">Join Date:</span>{" "}
                  {volunteerData?.joinDate}
                </p>
                <p className="text-sm">
                  <span className="font-bold">CNIC:</span> {volunteerData?.cnic}
                </p>
              </div>

              {/* Emergency Contact */}
              <div className="mt-6 p-4 bg-gray-100 rounded">
                <h4 className="font-bold text-center mb-2 text-gray-800">
                  In Case of Emergency
                </h4>
                <p className="text-sm text-center text-gray-800">
                  Please contact COMBINE FOUNDATION
                </p>
                <p className="text-sm text-center font-bold mt-2 text-gray-800">
                  +92 316 398783
                </p>
              </div>

              {/* Foundation Name */}
              <div className="text-center mt-4">
                <h3 className="text-xl font-bold">COMBINE FOUNDATION</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Print Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.print()}
            className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition"
          >
            Print ID Card
          </button>
        </div>
      </main>
    </div>
  );
};

export default VolunteerCard;
