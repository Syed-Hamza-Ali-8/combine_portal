"use client";

import React from "react";
import Image from "next/image";
import styles from "./volunteer.module.css";
import { assests } from "../../assest/assest";

interface VolunteerData {
  name: string;
  role: string;
  id: string;
  joinDate: string;
  phone: string;
  profile_img: string;
}

// Sample data
const volunteer: VolunteerData = {
  name: "M. Ali",
  role: "Co-ordinator and Innovation Lead",
  id: "678765",
  joinDate: "May 01, 2025",
  phone: "+92 316 398783",
  profile_img: "/volunteer/assest/profile.png",
};

const VolunteerCardPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Volunteer ID Card</h2>

      <div className={styles.cardWrapper}>
        {/* Front of the Card */}
        <div className={styles.card}>
          <Image
            src={assests.cardfront_img}
            alt="Front of ID Card"
            width={300}
            height={450}
            className={styles.image}
          />
          <div className={styles.profilewrap}>
            <Image
              src={volunteer.profile_img}
              alt={volunteer.name}
              width={100}
              height={100}
              className={styles.profile}
            />
          </div>

          <div className={styles.details}>
            <h2 className={styles.name}>{volunteer.name}</h2>
            <p className={styles.position}>{volunteer.role}</p>
            <p>
              <strong>ID:</strong> {volunteer.id}
            </p>
            <p>
              <strong>Join Date:</strong> {volunteer.joinDate}
            </p>
            <p>
              <strong>Phone:</strong> {volunteer.phone}
            </p>
          </div>
        </div>

        {/* Back of the Card */}
        <div className={styles.card}>
          <Image
            src={assests.cardback_img}
            alt="Back of ID Card"
            width={300}
            height={450}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default VolunteerCardPage;
