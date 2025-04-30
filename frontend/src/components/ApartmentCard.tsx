"use client";

import { Apartment } from "@/types/apartment";
import Link from "next/link";
import Image from "next/image";

type Props = {
  apartment: Apartment;
};

export default function ApartmentCard({ apartment }: Props) {
  return (
    <Link href={`/apartments/${apartment._id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 overflow-hidden border border-gray-100">
        {/* {apartment.images && apartment.images.length > 0 ? (
          <div className="relative w-full h-48">
            <Image
              src={apartment.images[0]}
              alt={apartment.name}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
            No image available
          </div>
        )} */}

        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">
            {apartment.name}
          </h2>
          <p className="text-sm text-gray-500 mb-1">
            Unit {apartment.unitNumber}
          </p>
          {apartment.project && (
            <p className="text-sm text-gray-600 mb-2">{apartment.project}</p>
          )}
          {apartment.price !== undefined && (
            <p className="text-purple-500 font-bold text-base">
              EGP {apartment.price.toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
