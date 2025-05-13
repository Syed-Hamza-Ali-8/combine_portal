'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import './notification.css';
import { assests } from '../../assest/assest';
import { RxCrossCircled } from 'react-icons/rx';

// Define the shape of a volunteer object
interface Volunteer {
  name: string;
  description: string;
}

// Initial data typed correctly
const initialVolunteers: Volunteer[] = [
  { name: 'Muhammad Ali', description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.' },
  { name: 'Muhammad Ali', description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.' },
  { name: 'Muhammad Ali', description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.' },
  { name: 'Muhammad Ali', description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.' },
  { name: 'Muhammad Ali', description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.' },
  { name: 'Muhammad Ali', description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.' },
];

const Notification: React.FC = () => {
  const [volunteers, setVolunteers] = useState<Volunteer[]>(initialVolunteers);

  const handleDelete = (indexToDelete: number) => {
    const updatedList = volunteers.filter((_, index) => index !== indexToDelete);
    setVolunteers(updatedList);
  };

  return (
    <div className="container">
      {volunteers.map((volunteer, index) => (
        <div key={index} className="card">
          <div className="profileSection">
            <Image
              src={assests.profile_img}
              alt="profile"
              width={50}
              height={50}
              className="avatar"
            />
            <div>
              <h3 className="name">{volunteer.name}</h3>
              <p className="description">{volunteer.description}</p>
            </div>
          </div>
          <button
            onClick={() => handleDelete(index)}
            className="iconButton"
            aria-label="Delete notification"
          >
            <RxCrossCircled className="icon" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Notification;
