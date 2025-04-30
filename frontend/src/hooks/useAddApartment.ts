import { Apartment, CreateApartmentDto } from "@/types/apartment";
import { usePost } from ".";
import queryClient from "@/lib/react-query";

export const useAddApartment = () => {
  return usePost<Apartment, CreateApartmentDto>(`/apartments`, {
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["fetchApartments"] });
    },
  });
};
