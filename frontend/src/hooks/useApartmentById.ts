import { Apartment } from "@/types/apartment";
import { useFetch } from ".";

export const useFetchApartmentById = (apartmentId: string) => {
  return useFetch<Apartment>(`/apartments/${apartmentId}`);
};
