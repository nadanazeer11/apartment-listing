import { Apartment, CreateApartmentDto } from "@/types/apartment";
import { usePost } from ".";

export const useAddApartment = () => {
  return usePost<Apartment, CreateApartmentDto>(`/apartments`);
};
