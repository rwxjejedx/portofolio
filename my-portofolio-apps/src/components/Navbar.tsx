import { useState, useEffect } from "react";

const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);
  return (
    <div className="navbar py-7 w-full flex justify-center">
        <ul 
            className={`
                menu flex justify-between gap-4 text-white
                
                // Lebar dan Posisi Default (Mobile)
                w-11/12 sm:w-10/12 // Gunakan w-11/12 atau w-full untuk mengatasi masalah 
                fixed left-1/2 -translate-x-1/2
                
                // Lebar dan Posisi MD (Desktop)
                md:static md:w-auto md:max-w-5xl md:-translate-x-0
                
                md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-2xl 
                transition-all md:transition-none 
                ${active ? "top-5 opacity-100" : "-top-3"}
            `}
        >
            <li><a href="#" className="sm:text-lg text-base font-medium">Home</a></li>
            <li><a href="#" className="sm:text-lg text-base font-medium">Project</a></li>
            <li><a href="#" className="sm:text-lg text-base font-medium">About</a></li>
            <li><a href="#" className="sm:text-lg text-base font-medium">Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar