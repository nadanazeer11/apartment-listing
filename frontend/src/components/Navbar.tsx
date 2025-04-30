"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full px-6 py-4 bg-white shadow-md flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-gray-800">
        Nawy
      </Link>

      <Link href="/add">
        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
          + Add Apartment
        </button>
      </Link>
    </header>
  );
};

export default Navbar;
