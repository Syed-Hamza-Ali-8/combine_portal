"use client";

import { useState, useEffect } from "react";
import Sidebar from "../../components/SideBar-vol";
import QRCode from "react-qr-code";
import Image from "next/image";
import logo from "../../volunteer/assest/logo.png";

interface VolunteerData {
  fullName: string;
  cnic: string;
  email: string;
  volunteerId: string;
  joinDate: string;
}

const VolunteerCard = () => {
  const [isCollapsed, setIsCollapsed] = useState(true); // Changed from sidebarOpen
  const [volunteerData, setVolunteerData] = useState<VolunteerData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedData = localStorage.getItem("volunteerData");
    if (storedData) {
      setVolunteerData(JSON.parse(storedData));
    } else {
      setVolunteerData({
        fullName: "M. Umar",
        cnic: "12345-6789012-3",
        email: "m.umar@example.com",
        volunteerId: "37521",
        joinDate: "May 01, 2025",
      });
    }
    setIsLoading(false);
  }, []);

  // Get initials from full name
  const getInitials = (name: string | undefined) => {
    if (!name) return "CF";
    return name
      .split(" ")
      .map(part => part[0])
      .join("")
      .toUpperCase();
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen bg-white">
        <div className="flex-1 p-4 md:p-8">
          <p className="text-gray-500">Loading volunteer data...</p>
        </div>
      </div>
    );
  }

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
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-label={isCollapsed ? "Open menu" : "Close menu"}
      >
        {isCollapsed ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>

      {/* Sidebar with corrected props */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Main Content Area */}
      <main className={`flex-1 p-4 md:p-8 transition-all duration-300 ${isCollapsed ? 'md:ml-0' : 'md:ml-64'}`}>
        {/* Page Header */}
        <div className="flex justify-between items-center mb-8 pl-10 md:pl-0">
          <h1 className="text-2xl md:text-3xl font-bold text-orange-600">
            VOLUNTEER ID CARD
          </h1>
          <button 
            className="p-2 rounded-full hover:bg-gray-100"
            onClick={() => window.print()}
            aria-label="Print ID card"
          >
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
          </button>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {/* Front Side */}
          <div className="w-full md:w-[380px] bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            {/* Logo Header Section */}
            <div className="bg-[#e67e22] py-4 px-6 flex flex-col items-center justify-center">
              <div className="mb-3 w-28 h-28 relative bg-white rounded-full p-2 shadow-md">
                <Image
                  src={logo}
                  alt="Combine Foundation Logo"
                  width={112}
                  height={112}
                  className="object-contain"
                  priority
                />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-wider">COMBINE FOUNDATION</h2>
            </div>

            {/* Card Body */}
            <div className="p-6">
              {/* Volunteer Avatar Placeholder */}
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full bg-orange-100 border-4 border-orange-200 flex items-center justify-center">
                  <span className="text-3xl font-bold text-orange-600">
                    {getInitials(volunteerData?.fullName)}
                  </span>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-800 mb-2 text-center">{volunteerData?.fullName}</h3>
              <p className="text-xl text-gray-700 mb-6 text-center">Co-ordinator and Innovation Lead</p>
              
              <div className="border-t-2 border-gray-200 my-4"></div>
              
              <div className="space-y-3">
                <p className="text-base text-gray-700">
                  <span className="font-semibold">ID:</span> {volunteerData?.volunteerId}
                </p>
                <p className="text-base text-gray-700">
                  <span className="font-semibold">Join Date:</span> {volunteerData?.joinDate}
                </p>
                <p className="text-base text-gray-700">
                  <span className="font-semibold">Phone:</span> +92 316 378243
                </p>
              </div>
              
              <div className="mt-12 text-center">
                <h3 className="text-xl font-bold text-[#e67e22] tracking-wider">COMBINE FOUNDATION</h3>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className="w-full md:w-[380px] bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-white p-5 text-center border-b border-gray-300">
              <h2 className="text-2xl font-bold text-gray-800">Volunteer Information</h2>
            </div>

            <div className="p-6 space-y-5">
              <div className="flex justify-center">
                <div className="p-3 border-2 border-gray-300 rounded-lg bg-white">
                  <QRCode 
                    value={qrData} 
                    size={160} 
                    level="H" 
                    bgColor="#ffffff"
                    fgColor="#000000"
                  />
                </div>
              </div>

              <div className="space-y-2 text-center">
                <h3 className="text-2xl font-bold text-gray-800">{volunteerData?.fullName}</h3>
                <p className="text-base text-gray-700">
                  <span className="font-semibold">ID:</span> {volunteerData?.volunteerId}
                </p>
                <p className="text-base text-gray-700">
                  <span className="font-semibold">Join Date:</span> {volunteerData?.joinDate}
                </p>
                <p className="text-base text-gray-700">
                  <span className="font-semibold">CNIC:</span> {volunteerData?.cnic}
                </p>
              </div>

              <div className="mt-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                <h4 className="font-bold text-center mb-2 text-gray-800 text-base">
                  In Case of Emergency
                </h4>
                <p className="text-sm text-center text-gray-700">
                  Please contact COMBINE FOUNDATION
                </p>
                <p className="text-sm text-center font-bold mt-2 text-gray-800">
                  +92 316 378243
                </p>
              </div>

              <div className="text-center mt-4">
                <h3 className="text-xl font-bold text-gray-800 tracking-wider">COMBINE FOUNDATION</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VolunteerCard;