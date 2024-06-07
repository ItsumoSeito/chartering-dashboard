import NewRequestForm from '@/components/forms/NewRequestForm';
import { getAirports } from '@/lib/api/airports';
import React from 'react';

const NewRequest = async () => {
  const airports = await getAirports();

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl">New Request</h1>
        <p>Please fill out the form below to create a new chartering request</p>
      </div>
      <div className="px-20">
        <NewRequestForm airports={airports} />
      </div>
    </div>
  );
};

export default NewRequest;
