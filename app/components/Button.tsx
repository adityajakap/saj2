"use client";
import React from "react";
import Image from "next/image";

interface HeaderProps {
    onHomeClick?: () => void;
    onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick, onMenuClick }) => {
    return (
        <div className="absolute top-4 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-6 lg:px-8">
            {/* Home Button */}
            <a href="/">
                <Image
                    src="/images/home-button.png"
                    alt="Home Button"
                    width={60}
                    height={60}
                    className="cursor-pointer hover:scale-110 transition-transform"
                />
            </a>
            {/* Hamburger Menu */}
            <Image
                src="/images/candy-box.png"
                alt="Menu Button"
                width={60}
                height={60}
                className="cursor-pointer hover:rotate-12 transition-transform"
                onClick={
                    onMenuClick ? onMenuClick : () => console.log("Menu clicked")
                }
            />
        </div>
    );
};

export default Header;