"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useFetchApartmentById } from "@/hooks/useApartmentById";
import Loader from "@/components/Loader";
import { Hash, Layers, Tag } from "lucide-react";

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
    <main className="p-6">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        Apartment Details
      </h1>

      <hr className="mb-6 border-gray-300" />

      <div className="bg-white rounded-xl p-6 max-w-3xl w-full shadow">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          {apartment.name}
        </h2>

        <div className="text-sm text-gray-600 space-y-2 mb-6">
          <p className="flex items-center gap-2">
            <Hash className="w-4 h-4 text-gray-500" />
            <span className="font-medium text-gray-700">Unit:</span>
            {apartment.unitNumber}
          </p>
          {apartment.project && (
            <p className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-gray-500" />
              <span className="font-medium text-gray-700">Project:</span>
              {apartment.project}
            </p>
          )}
          <p className="flex items-center gap-2 text-purple-600 font-semibold text-base">
            <Tag className="w-4 h-4" />
            EGP {apartment.price.toLocaleString()}
          </p>
        </div>

        {apartment.description && (
          <>
            <h3 className="text-gray-900 font-semibold mb-2">Description</h3>
            <p className="text-gray-700 leading-relaxed">
              {apartment.description}
            </p>
          </>
        )}
      </div>
    </main>
  );
};

export default Apartment;
