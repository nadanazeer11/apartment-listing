"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useFetchApartmentById } from "@/hooks/useApartmentById";

const Apartment = () => {
  const params = useParams();
  const id = params?.id as string;

  const { data: apartment, isLoading, isError } = useFetchApartmentById(id);

  if (isLoading) {
    return (
      <p className="p-6 text-center text-gray-500">Loading apartment...</p>
    );
  }

  if (isError || !apartment) {
    return (
      <p className="p-6 text-center text-red-500">Error loading apartment.</p>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{apartment.name}</h1>
      <p className="text-gray-600 mb-2">Unit: {apartment.unitNumber}</p>
      {apartment.project && (
        <p className="text-gray-500 mb-4">Project: {apartment.project}</p>
      )}

      <p className="text-green-600 text-lg font-semibold mb-6">
        EGP {apartment.price.toLocaleString()}
      </p>
      {apartment.description && <p className="mb-4">{apartment.description}</p>}
      {apartment.images && apartment.images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {apartment.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Apartment Image ${idx}`}
              className="rounded-lg"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apartment;
