"use client";

import { useFetchApartments } from "@/hooks/useApartments";
import ApartmentCard from "@/components/ApartmentCard";

export default function Home() {
  const { data: apartments, isLoading, isError } = useFetchApartments();

  // if (isLoading) {
  //   return (
  //     <p className="p-6 text-center text-gray-500">Loading apartments...</p>
  //   );
  // }

  // if (isError) {
  //   return (
  //     <p className="p-6 text-center text-red-500">Error loading apartments.</p>
  //   );
  // }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 ">Apartments</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {apartments?.map((apartment) => (
          <ApartmentCard key={apartment._id} apartment={apartment} />
        ))}
      </div>
    </div>
  );
}
