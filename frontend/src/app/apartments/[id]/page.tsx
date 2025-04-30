"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useFetchApartmentById } from "@/hooks/useApartmentById";
import Loader from "@/components/Loader";

const Apartment = () => {
  const params = useParams();
  const id = params?.id as string;

  const { data: apartment, isLoading, isError } = useFetchApartmentById(id);

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !apartment) {
    return (
      <p className="p-6 text-center text-red-500">Error loading apartment.</p>
    );
  }

  return (
    <main className="p-6 flex justify-center">
      <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl w-full">
        <h1 className=" text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          {apartment.name}
        </h1>

        <div className="text-sm text-gray-600 mb-4">
          <p className="mb-1">
            <span className="font-medium text-gray-700">Unit:</span>{" "}
            {apartment.unitNumber}
          </p>
          {apartment.project && (
            <p className="mb-1">
              <span className="font-medium text-gray-700">Project:</span>{" "}
              {apartment.project}
            </p>
          )}
        </div>

        <p className="text-purple-600 text-xl font-semibold mb-6">
          EGP {apartment.price.toLocaleString()}
        </p>

        {apartment.description && (
          <div className="text-gray-700">{apartment.description}</div>
        )}
      </div>
    </main>
  );
};

export default Apartment;
