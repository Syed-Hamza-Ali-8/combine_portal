"use client"; // Needed if you're using event handlers

import Link from "next/link";
import Image from "next/image";
import { assests } from "./volunteer/assest/assest";
import "./globals.css"; // This is for your global styles

const AccountTypeSelection = () => {
  return (
    <div className="max-w-[800px] mx-auto my-12 p-10 bg-white rounded-lg shadow-lg text-center">
      <Image
        src={assests.account}
        alt="Account Illustration"
        className="max-w-[150px] mx-auto mb-5"
      />
      <h1 className="text-3xl font-bold text-black">Account Type</h1>
      <p className="text-gray-600 mt-2">
        Click your role to continue to your dashboard.
      </p>
      <div className="flex justify-between mt-8 gap-5 flex-wrap">
        <Link href="/volunteer/">
          <div className="flex-1 w-[200px] p-5 border border-gray-300 rounded-lg bg-orange-500 text-white transition duration-300 hover:shadow-xl">
            <h2>Volunteer</h2>
          </div>
        </Link>
        <Link href="/admin/">
          <div className="flex-1 w-[200px] p-5 border border-gray-300 rounded-lg bg-orange-500 text-white transition duration-300 hover:shadow-xl">
            <h2>Admin</h2>
          </div>
        </Link>
        <Link href="/trustee/">
          <div className="flex-1 w-[200px] p-5 border border-gray-300 rounded-lg bg-orange-500 text-white transition duration-300 hover:shadow-xl">
            <h2>Trustee</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AccountTypeSelection;
