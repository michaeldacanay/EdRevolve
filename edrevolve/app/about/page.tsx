import { useMutation, useQuery } from '../../convex/_generated/react';
import * as React from 'react';

import dynamic from 'next/dynamic';

const FormComponent = dynamic(() => import('../../components/FormComponent'), {
  ssr: false,
});

async function getDataTreehack() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();
  return data;
}

export default function AboutPage() {
    return <FormComponent />;
}