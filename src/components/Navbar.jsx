import { Menu, X } from "lucide-react"
import { useState } from "react";
import logo from "../assets/logo.png"
import { navItems } from "../constants"
import { ShoppingCart } from "lucide-react";
import { ApiWhatsApp } from "../api/ApiWhatsApp";

function Navbar() {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const handleScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.id == 'init' ? targetElement.offsetTop - 182 : targetElement.offsetTop - 120;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            })
        }
    }

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-l-neutral-400 bg-[#708871] ">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-11 w-11 mr-2" src={logo} alt="logo" />
                        <span className="text-xl tracking-tight text-stone-50">BIO-LI</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={`#${item.targetId}`} className="text-stone-50" onClick={(e) => handleScroll(e, item.targetId)}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <button
                            onClick={ApiWhatsApp}
                            href="#"
                            className="flex items-center py-2 px-4 border rounded-md 
                            text-center  text-stone-50
                            hover:bg-stone-50 hover:text-[#708871] focus:outline-none focus:ring-2 focus:ring-opacity-50">
                            <ShoppingCart className="mr-2" />
                            <span>Comprar</span>
                        </button>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-50 bg-white w-full p-8 flex flex-col justify-center items-center lg:hidden border-b border-l-neutral-800 text-neutral-600">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={`#${item.targetId}`} onClick={(e) => handleScroll(e, item.targetId)}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            <button
                                onClick={ApiWhatsApp}
                                href="#"
                                className="flex items-center py-2 px-5 border rounded-md text-center 
                                hover:bg-[#708871] hover:text-stone-50 focus:outline-none focus:ring-2 focus:ring-opacity-50">
                                <ShoppingCart className="mr-2" />
                                <span>Contáctanos</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export { Navbar }