"use client";

import { useAddApartment } from "@/hooks/useAddApartment";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import { Fragment } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "./FormInput";

type Props = {
  isAddApartmentModalOpen: boolean;
  setIsAddApartmentModalOpen: (open: boolean) => void;
};

const schema = z.object({
  name: z.string().min(1, "Name required"),
  unitNumber: z.string().min(1, "Unit number required"),
  project: z.string().optional(),
  price: z.coerce
    .number()
    .positive({ message: "Price must be greater than 0" }),
  description: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const AddApartmentModal = (props: Props) => {
  const { isAddApartmentModalOpen, setIsAddApartmentModalOpen } = props;
  const closeModal = () => {
    reset();
    setIsAddApartmentModalOpen(false);
  };

  const { mutate, isPending, error } = useAddApartment();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    mutate(data, {
      onSuccess: () => {
        closeModal();
      },
    });
  };

  return (
    <Transition appear show={isAddApartmentModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center px-4 py-8">
            <DialogPanel className="w-full max-w-lg transform  rounded-2xl bg-white text-gray-900 p-6 shadow-xl transition-all">
              <DialogTitle className="text-xl font-bold mb-4">
                Add New Apartment
              </DialogTitle>

              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                  placeholder="Name"
                  register={register("name")}
                  error={errors.name}
                />

                <FormInput
                  placeholder="Unit Number"
                  register={register("unitNumber")}
                  error={errors.unitNumber}
                />

                <FormInput
                  placeholder="Project"
                  register={register("project")}
                />

                <FormInput
                  type="number"
                  placeholder="Price"
                  register={register("price")}
                  error={errors.price}
                />

                <FormInput
                  placeholder="Description"
                  register={register("description")}
                  as="textarea"
                />

                <div className="flex justify-end space-x-2 pt-2">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
                    disabled={isPending}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isPending}
                    className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                  >
                    {isPending ? "Saving" : "Save"}
                  </button>
                </div>

                {error && (
                  <p className="text-red-500 text-sm pt-2">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AddApartmentModal;
