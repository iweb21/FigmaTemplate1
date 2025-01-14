"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { ReviewCard } from '@/app/components/revews/reviews-cards';
import Details from '@/app/components/revews/details';

const Daynapicproductsd = () => {
  // Fetch dynamic params using useParams
  const params = useParams();

  // Ensure `id` exists and is converted to a number
  const productId = params?.id ? Number(params.id) : null;

  return (
    <div>
      {/* Pass required props to ReviewCard */}
      <Details />
    </div>
  );
};

export interface ReviewCardProps {
  id: number;
  name: string;
  rating: number;
  date: string;
  content: string;
}

export default Daynapicproductsd;
   
