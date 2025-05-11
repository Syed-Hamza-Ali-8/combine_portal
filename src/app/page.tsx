"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

// AccountTypeCard Component
interface AccountTypeCardProps {
  title: string;
  description: string;
}

const AccountTypeCard: React.FC<AccountTypeCardProps> = ({
  title,
  description,
}) => {
  return (
    <article className="flex flex-col p-6 rounded-lg border border-solid border-gray-200 transition-shadow ease-in-out duration-300 hover:shadow-md cursor-pointer">
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </article>
  );
};

// AccountTypeSelection Component
interface AccountType {
  id: string;
  title: string;
  description: string;
}

const AccountTypeSelection: React.FC = () => {
  const accountTypes: AccountType[] = [
    {
      id: "trustee",
      title: "Trustee",
      description: "Manage requests from landlords & find new jobs.",
    },
    {
      id: "admin",
      title: "Admin",
      description: "Accept rent online & manage rental",
    },
    {
      id: "volunteer",
      title: "Volunteer",
      description: "Find a place & pay rent online",
    },
  ];

  return (
    <main className="p-6 bg-white min-h-screen">
      <section className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center text-center">
          <figure className="mb-8">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets%2F592f822779b54258b4cdf2eed5c74769%2Fafe7dc892de447499890b130452f7c43"
              alt="Account search illustration"
              className="w-[200px] h-auto ml-0"
              width={200}
              height={200}
            />
          </figure>

          <h1 className="mb-4 text-3xl font-semibold text-gray-900">
            Account Type
          </h1>

          <p className="mb-12 text-base text-gray-500 max-w-[600px]">
            Click your role to continue to your dashboard.
          </p>

          <div className="flex gap-5 max-md:flex-col w-full">
            {accountTypes.map((accountType, index) => (
              <Link
                href={`/${accountType.id}`}
                key={accountType.id}
                className={`w-[33%] max-md:w-full ${
                  index > 0 ? "max-md:mt-5" : ""
                }`}
              >
                <AccountTypeCard
                  title={accountType.title}
                  description={accountType.description}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AccountTypeSelection;
