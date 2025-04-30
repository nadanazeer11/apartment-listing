// import { Apartment } from "@/types/apartment";
// import { useFetch } from ".";

// export const useFetchApartments = () => {
//   return useFetch<Apartment[]>(`/apartments`, {
//     queryKey: ["fetchApartments"],
//   });
// };

"use client";

import { useQuery } from "@tanstack/react-query";
import { Apartment } from "@/types/apartment";

const mockApartments: Apartment[] = [
  {
    _id: "1",
    name: "Sea View Apartment",
    unitNumber: "A203",
    project: "Marassi North Coast",
    price: 1500000,
    description: "Stunning view of the Mediterranean sea!",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1586105251261-72a756497a12",
    ],
    createdAt: "",
    updatedAt: "",
  },
  {
    _id: "2",
    name: "City Center Flat",
    unitNumber: "B10",
    project: "Downtown Cairo",
    price: 950000,
    description: "In the heart of the city, near all attractions.",
    images: [],
    createdAt: "",
    updatedAt: "",
  },
];

export const useFetchApartments = () =>
  useQuery<Apartment[]>({
    queryKey: ["apartments"],
    queryFn: async () => {
      // await new Promise((resolve) => setTimeout(resolve, 500)); // simulate network delay
      return mockApartments;
    },
  });
