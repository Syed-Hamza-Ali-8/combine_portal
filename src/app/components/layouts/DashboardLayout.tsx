"use client";

import React, { useState } from "react";
import { Sidebar } from "./sidebar";
import Image from "next/image";
import ADMIN from "../../images/ADMIN.png";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#F4F6F6]">
      {/* Header Row */}
      <div className="w-full h-[146px] bg-white flex items-center justify-between px-[65px] relative">
        {/* Logo and Title */}
        <div className="flex items-center gap-8">
          {/* If collapsed, render logo in header */}
          {collapsed && (
            <div className="flex items-center justify-start">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b689aca73d4a910f195fba599f1c1031158ed8ca"
                alt="CF color-01"
                width={170}
                height={172}
              />
            </div>
          )}
          <h1 className="text-[32px] font-semibold text-[#1A1A1A] max-sm:text-2xl">
            ADMIN DASHBOARD - COMBINE FOUNDATION
          </h1>
        </div>

        {/* Profile Card */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col text-right">
            <span className="text-base text-[#4D4D4D]">ADMIN</span>
            <span className="text-sm text-[#999]">ID: 00401</span>
          </div>
          <Image
            src={ADMIN}
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>

      {/* Body with Sidebar and Main Content */}
      <div className="flex">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <main className="flex-1 px-[67px] py-[73px] max-sm:px-5 max-sm:py-10">
          {children}
        </main>
      </div>
    </div>
  );
};
