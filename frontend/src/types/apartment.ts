export type Apartment = {
  _id: string;
  name: string;
  unitNumber: string;
  project?: string;
  price: number;
  description?: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateApartmentDto = Pick<
  Apartment,
  "name" | "unitNumber" | "project" | "price" | "description"
>;
