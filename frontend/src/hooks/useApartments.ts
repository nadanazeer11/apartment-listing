"use client";

import { Apartment } from "@/types/apartment";
import { useFetch } from ".";

export const useFetchApartments = (search?: string) => {
  return useFetch<Apartment[]>(
    `/apartments${search ? `?search=${search}` : ""}`,
    {
      queryKey: ["fetchApartments", search],
    }
  );
};
