"use client";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import { Fragment } from "react";

type Props = {
  isAddApartmentModalOpen: boolean;
  setIsAddApartmentModalOpen: (open: boolean) => void;
};
const AddApartmentModal = (props: Props) => {
  const { isAddApartmentModalOpen, setIsAddApartmentModalOpen } = props;
  const closeModal = () => setIsAddApartmentModalOpen(false);

  return (
    <>
      <Transition appear show={isAddApartmentModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm" />
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center px-4 py-8">
              <DialogPanel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white text-gray-900 p-6 shadow-xl transition-all">
                <DialogTitle className="text-xl font-bold mb-4">
                  Add New Apartment
                </DialogTitle>

                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border px-3 py-2 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Unit Number"
                    className="w-full border px-3 py-2 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Project"
                    className="w-full border px-3 py-2 rounded"
                  />
                  <input
                    type="number"
                    placeholder="Price"
                    className="w-full border px-3 py-2 rounded"
                  />
                  <textarea
                    placeholder="Description"
                    className="w-full border px-3 py-2 rounded"
                  />
                  <div className="flex justify-end space-x-2 pt-2">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AddApartmentModal;
