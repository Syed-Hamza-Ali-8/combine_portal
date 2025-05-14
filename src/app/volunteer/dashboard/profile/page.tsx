'use client';

import './profile.css';
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUser,
  FaCalendarAlt,
  FaIdCard,
  FaGraduationCap,
} from 'react-icons/fa';

import { Sidebar } from "../../../components/sidebar";
import { useState } from 'react';

export default function Profile() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
    <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
    <div className="profile-container">
      <div className="profile-wrapper">
        {/* Sidebar */}
        <div className="profile-box">
          <div className="profile-content">
            <div className="avatar" />
            <h2 className="text-gray-800">Muhammad Ali</h2>
            <p className="email text-gray-600">muhammadali221@gmail.com</p>

            <div className="info">
              <div className="info-item text-gray-800">
                <FaPhoneAlt className="text-gray-700" />
                <span>03127473404</span>
              </div>
              <div className="info-item text-gray-800">
                <FaMapMarkerAlt className="text-gray-700" />
                <span>Lorem Ipsum Is Simply Dummy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="info-boxes">
            <div className="info-box">
              <div className="label text-gray-700">
                <FaUser className="text-gray-600" />
                <span>Full Name</span>
              </div>
              <p className="value text-gray-800">Muhammad Ali</p>

              <div className="label text-gray-700">
                <FaCalendarAlt className="text-gray-600" />
                <span>Date Of Birth</span>
              </div>
              <p className="value text-gray-800">July 28, 2010</p>
            </div>

            <div className="info-box">
              <div className="label text-gray-700">
                <FaUser className="text-gray-600" />
                <span>Gender</span>
              </div>
              <p className="value text-gray-800">Male</p>

              <div className="label text-gray-700">
                <FaIdCard className="text-gray-600" />
                <span>CNIC</span>
              </div>
              <p className="value text-gray-800">42206856687</p>
            </div>
          </div>

          <div className="info-box">
            <div className="label text-gray-700">
              <FaGraduationCap className="text-gray-600" />
              <span>Qualification</span>
            </div>
            <p className="value text-gray-800">Intermediate</p>
          </div>

          <div className="info-box active-course">
            <div>
              <p className="text-gray-600">Active Course</p>
              <p className="text-gray-800">
                Course Name: <strong>Lorem</strong> | Roll Number: <strong>99088</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}