import React from 'react';
import LoadingCard from './LoadingCard';

// Loading Skeleton
const LoadingSkeleton = () => {
    // Creates an array of 20 undefined elements , it is used to map over it to display 20 skeleton cards
  const loadingCards = Array.from({ length: 20 });

  return (
    <div className="max-w-[1400px] w-[1400px] grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 px-4 h-screen">
      {loadingCards.map((index) => (
        <LoadingCard key={index} />
      ))}
    </div>
  );
};

export default LoadingSkeleton;
