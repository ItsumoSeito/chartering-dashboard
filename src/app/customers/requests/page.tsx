'use client';

import { queryKeys } from '@/lib/queryKeys';
import { Request } from '@/models';
import { DataStore } from '@aws-amplify/datastore';
import { useSuspenseQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const Requests = () => {
  const [requests, setRequests] = useState<Request[]>([]);

  useEffect(() => {
    (async () => {
      setRequests(await DataStore.query(Request));
    })();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      {requests.map((request, index) => (
        <div key={index}>{JSON.stringify(request)}</div>
      ))}
    </div>
  );
};

export default Requests;
