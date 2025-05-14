import React from "react";
import Link from "next/link";
import Image from "next/image";
import Account from "./images/account.png";

interface AccountOptionProps {
  title: string;
  description: string;
  href: string;
}

const AccountTypeSelection = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden p-6 sm:p-8 md:p-10">
        <div className="flex justify-center mb-6">
          <Image
            src={Account}
            alt="Account Type"
            height={120}
            width={120}
            className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32"
          />
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
          Account Type
        </h1>

        <p className="text-gray-600 mb-6 sm:mb-8 text-center text-sm sm:text-base md:text-lg">
          Choose the account type that suits your needs.
          <br />
          Each has a different set of tools and features.
        </p>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
          <AccountOption
            title="Volunteer"
            description="Find a place & pay rent online"
            href="/volunteer"
          />
          <AccountOption
            title="Admin"
            description="Accept rent online & manage rental"
            href="/admin"
          />
          <AccountOption
            title="Trustee"
            description="Manage requests from landlords & find new jobs"
            href="/trustee"
          />
        </div>
      </div>
    </div>
  );
};

const AccountOption = ({ title, description, href }: AccountOptionProps) => {
  return (
    <Link href={href} passHref>
      <div className="h-full p-4 sm:p-5 md:p-6 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2">
          {title}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default AccountTypeSelection;
