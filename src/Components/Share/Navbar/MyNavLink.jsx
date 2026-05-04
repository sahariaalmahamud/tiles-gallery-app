"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MyNavLink = ({ href, children, className }) => {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={`font-medium transition-colors ${pathName === href ? "text-[#FF653F] font-bold" : "text-[#0b0031] hover:text-[#FF653F]"} ${className}`}
    >
      {children}
    </Link>
  );
};

export default MyNavLink;
