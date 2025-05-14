// components/Sidebar.tsx
'use client'

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from "../volunteer/assest/logo.png"

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    console.log('Logging out...');
    setIsOpen(false);
    // Clear any user session data if needed
    localStorage.removeItem('rememberMe');
    // Redirect to login page
    router.push('/');
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 fixed inset-y-0 left-0 w-64 bg-white border-r border-orange-200 shadow-sm 
          p-6 flex flex-col z-40 transition-transform duration-300 ease-in-out`}
      >
        {/* Logo Section */}
        <div className="mb-10 flex justify-center">
          <Image
            src={logo}
            alt="Combine Foundation Logo"
            width={160}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 space-y-2">
          <Link 
            href="/volunteer/dashboard" 
            className={`block py-3 px-4 rounded-lg transition ${pathname === '/pages/dashboard' ? 'bg-orange-100 text-orange-600' : 'text-gray-600 hover:bg-orange-50 hover:text-orange-600'}`}
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          <Link 
            href="/volunteer/lecture" 
            className={`block py-3 px-4 rounded-lg transition ${pathname === '/pages/lecture' ? 'bg-orange-100 text-orange-600' : 'text-gray-600 hover:bg-orange-50 hover:text-orange-600'}`}
            onClick={() => setIsOpen(false)}
          >
            Lecture
          </Link>
          <Link 
            href="/volunteer/course" 
            className={`block py-3 px-4 rounded-lg transition ${pathname === '/pages/course' ? 'bg-orange-100 text-orange-600' : 'text-gray-600 hover:bg-orange-50 hover:text-orange-600'}`}
            onClick={() => setIsOpen(false)}
          >
            Course
          </Link>
          <Link 
            href="/volunteer/tasks" 
            className={`block py-3 px-4 rounded-lg transition ${pathname === '/pages/tasks' ? 'bg-orange-100 text-orange-600' : 'text-gray-600 hover:bg-orange-50 hover:text-orange-600'}`}
            onClick={() => setIsOpen(false)}
          >
            Task
          </Link>
          <Link 
            href="/volunteer/get-card" 
            className={`block py-3 px-4 rounded-lg transition ${pathname === '/get-card' ? 'bg-orange-100 text-orange-600' : 'text-gray-600 hover:bg-orange-50 hover:text-orange-600'}`}
            onClick={() => setIsOpen(false)}
          >
            Get Card
          </Link>
        </nav>

        {/* Logout Button */}
        <div className="mt-auto">
          <button 
            className="w-full text-left py-3 px-4 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;