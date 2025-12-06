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
        <ul className={`menu flex justify-between w-100 sm:gap-10 gap-4 text-white fixed md:static left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-2xl ${active ? "top-5 opacity-100" : "-top-10"}`}>
            <li><a href="#" className="text-lg font-medium">Home</a></li>
            <li><a href="#" className="text-lg font-medium">Project</a></li>
            <li><a href="#" className="text-lg font-medium">About</a></li>
            <li><a href="#" className="text-lg font-medium">Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar