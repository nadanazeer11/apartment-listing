"use client";

import Link from "next/link";
import AddApartmentModal from "./AddApartmentModal";
import { useState } from "react";

const Navbar = () => {
  const [isAddApartmentModalOpen, setIsAddApartmentModalOpen] = useState(false);
  const openAddApartmentModal = () => {
    setIsAddApartmentModalOpen(true);
  };
  return (
    <header className="w-full px-6 py-4 bg-white shadow-md flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-gray-800">
        Nawy
      </Link>

      <button
        className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
        onClick={openAddApartmentModal}
      >
        + Add Apartment
      </button>
      <AddApartmentModal
        isAddApartmentModalOpen={isAddApartmentModalOpen}
        setIsAddApartmentModalOpen={setIsAddApartmentModalOpen}
      />
    </header>
  );
};

export default Navbar;
