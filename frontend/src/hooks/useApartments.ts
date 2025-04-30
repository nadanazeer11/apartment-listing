"use client";

import { Apartment } from "@/types/apartment";
import { useFetch } from ".";

export const useFetchApartments = () => {
  return useFetch<Apartment[]>(`/apartments`, {
    queryKey: ["fetchApartments"],
  });
};
