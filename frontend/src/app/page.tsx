"use client";

import { useState } from "react";
import ApartmentCard from "@/components/ApartmentCard";
import { Apartment } from "@/types/apartment";
import useDebounce from "@/hooks/useDebounce";
import { useFetchApartments } from "@/hooks/useApartments";
import SearchBar from "@/components/Searchbar";
import Loader from "@/components/Loader";

export default function Home() {
  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce(search);
  const {
    data: apartments,
    isLoading,
    isError,
  } = useFetchApartments(debouncedValue);

  const handleClear = () => {
    setSearch("");
  };

  return (
    <div className="p-6">
      <SearchBar value={search} onChange={setSearch} onClear={handleClear} />

      {isLoading && <Loader />}
      {isError && (
        <p className="text-center text-red-500">Failed to load apartments</p>
      )}

      {apartments?.length === 0 && !isLoading && !isError && (
        <p className="text-center text-gray-500 mt-10">
          No apartments found matching your search.
        </p>
      )}

      {apartments && apartments?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apartments.map((apartment: Apartment) => (
            <ApartmentCard key={apartment._id} apartment={apartment} />
          ))}
        </div>
      )}
    </div>
  );
}
