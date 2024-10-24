import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <ul className="flex border-white border p-1.5">
        <li className="mx-6">
          <Link href="/home">Home</Link>
        </li>
        <li className="mx-6">
          <Link href="/following">Following</Link>
        </li>
        <li className="mx-6">
          <Link href="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
