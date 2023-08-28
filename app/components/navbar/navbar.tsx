"use client";
import { FC, useState } from "react";
import { MenuProps } from "./types";
import { Navigation } from "./helpers/data";
import Link from "next/link";
import Button from "../button/button";
import { HamburgerIcon } from "../icons";
import clsx from "clsx";

type NavbarProps = {
    className?: string;
    navigationLinks?: MenuProps[];
};

const Navbar: FC<NavbarProps> = ({ navigationLinks = Navigation }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <nav className="">
            <div className="max-w-screen flex md:flex-row flex-col items-center justify-between mx-auto p-4 shadow-[0_8px_5px_-10px_rgba(0,0,0,0.3)] md:justify-around ">
                <div className="flex justify-between w-full md:w-fit">
                    <h1 className="text-2xl md:text-3xl font-semibold">Trendy News</h1>
                    <div className="md:order-2 md:hidden block cursor-pointer">
                        <HamburgerIcon width={30} height={30} onClick={handleMenuOpen} />
                    </div>
                </div>

                <div
                    className={clsx(
                        menuOpen ? "block w-full" : "items-center justify-between hidden md:flex md:w-auto md:order-1"
                    )}
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        {navigationLinks.map((item) => (
                            <li
                                key={item.name}
                                className={clsx(
                                    menuOpen
                                        ? "w-full"
                                        : "block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:text-blue-500"
                                )}
                                aria-current={item.current ? "page" : undefined}
                            >
                                <Link href={item.href}>
                                    <Button type="button" secondary className={clsx(menuOpen && "w-full")}>
                                        {item.name}
                                    </Button>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
