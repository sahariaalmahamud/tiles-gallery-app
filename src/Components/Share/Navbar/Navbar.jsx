"use client";

import { useState } from "react";
import MyNavLink from "./MyNavLink";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data, isPending } = authClient.useSession();

  const user = data?.user;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = (
    <>
      <li>
        <MyNavLink href={"/"}>Home</MyNavLink>
      </li>
      <li>
        <MyNavLink href={"/all-tiles"}>Collections</MyNavLink>
      </li>
      <li>
        <MyNavLink href={"/my-profile"}>Profile</MyNavLink>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 backdrop-blur-2xl bg-white/95 shadow-sm">
      <header className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo Section */}
        <div className="flex items-center gap-8">
          <button
            className="md:hidden text-[#0b0031] hover:text-[#FF653F] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <Link href={"/"} className="hover:opacity-80 transition-opacity">
            <h2 className="font-bold text-xl md:text-2xl text-[#0b0031] whitespace-nowrap">
              <span className="text-[#FF653F]">Tiles</span> Gallery
            </h2>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden items-center gap-8 md:flex font-medium">{links}</ul>

        {/* User Section */}
        <div className="flex items-center gap-3 md:gap-4">
          {isPending ? (
            <p className="text-xs md:text-sm text-[#0b0031] font-medium">Loading...</p>
          ) : user ? (
            <div className="flex items-center gap-3 md:gap-4">
              <Link href={"/my-profile"} className="hover:opacity-80 transition-opacity">
                <Avatar className="w-9 h-9 md:w-10 md:h-10 border-2 border-[#FF653F]">
                  <Avatar.Image
                    alt={user?.name}
                    src={user?.image}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback className="font-bold text-sm">{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
              </Link>

              <Button
                onClick={async () => await authClient.signOut()}
                className="bg-[#FF653F] text-white font-semibold px-3 py-2 md:px-4 md:py-2 text-sm md:text-base hover:bg-[#E55A35] transition-colors"
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <Link href={"/signin"}>
              <Button className="bg-[#FF653F] text-white font-semibold px-3 py-2 md:px-4 md:py-2 text-sm md:text-base hover:bg-[#E55A35] transition-colors">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <ul className="flex flex-col gap-4 p-4 space-y-2">{links}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
