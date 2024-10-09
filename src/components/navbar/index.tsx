'use client'
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "../ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [isMenuOpen])

    return (
        <div className="relative">
            {/* Navbar content */}
            <header className="bg-white h-[72px] shadow-sm relative top-0 z-50">
                <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src="/logo.png"
                            alt="Delivery in action"
                            width={50}
                            height={50}
                            className="rounded-lg w-auto h-14 object-cover"
                        />
                        <span className="text-xl font-bold text-gray-900 hidden sm:block">Reliable Delivery Solutions</span>
                    </Link>
                    <nav className={`
                        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                        fixed top-[72px] right-0 bottom-0 w-[70%] 
                        bg-white md:bg-transparent
                        flex flex-col md:flex-row
                        items-center justify-start md:justify-end
                        space-y-8 md:space-y-0 md:space-x-6
                        transition-transform duration-300 ease-in-out
                        md:relative md:top-0 md:translate-x-0 md:ml-auto md:w-auto
                        pt-8 md:pt-0 overflow-y-auto z-50
                    `}>
                        <Link href="#" className="text-gray-600 hover:text-blue-600" onClick={closeMenu}>Home</Link>
                        <Link href="#about" className="text-gray-600 hover:text-blue-600" onClick={closeMenu}>About Us</Link>
                        <Link href="#founder" className="text-gray-600 hover:text-blue-600" onClick={closeMenu}>Our Founder</Link>
                        <Link href="#services" className="text-gray-600 hover:text-blue-600" onClick={closeMenu}>Services</Link>
                        <Link href="#quote" className="text-gray-600 hover:text-blue-600" onClick={closeMenu}>Get a Quote</Link>
                        <Link href="#testimonials" className="text-gray-600 hover:text-blue-600" onClick={closeMenu}>Testimonials</Link>
                    </nav>
                    <Button className="md:hidden" onClick={toggleMenu}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </Button>
                </div>
            </header>

            {/* Overlay outside the navbar */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={closeMenu}></div>
        </div>
    )
}
