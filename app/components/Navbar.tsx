import React from "react";
import { Navbar } from "flowbite-react";
import Image from "next/image";
const NavbarPage = () => {
  return (
    <div>
      {/* NAVBAR */}
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <Image
            src="/images/logo1.png"
            height={144}
            width={144}
            alt="Your Name"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Sarifah Ainun Jariyah
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      {/* NAVBAR */}
    </div>
  );
};

export default NavbarPage;
