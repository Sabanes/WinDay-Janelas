"use client"
import { useEffect, useState, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import Link from "next/link"

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const lastScrollY = useRef(0)
  const navbarRef = useRef(null)
  const menuRef = useRef(null)
  const scrollTimeout = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

    const handleScroll = () => {
      // Clear the previous timeout
      if (scrollTimeout.current) {
        window.cancelAnimationFrame(scrollTimeout.current)
      }

      // Use requestAnimationFrame for smooth animation
      scrollTimeout.current = window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY

        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          gsap.to(navbarRef.current, {
            y: "-100%",
            duration: 0.2,
            ease: "power4.out",
          })
        } else {
          gsap.to(navbarRef.current, {
            y: "0%",
            duration: 0.2,
            ease: "power4.out",
          })
        }

        lastScrollY.current = currentScrollY
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeout.current) {
        window.cancelAnimationFrame(scrollTimeout.current)
      }
    }
  }, [])

  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault()
      const href = e.currentTarget.getAttribute("href")
      const element = document.querySelector(href)

      if (element) {
        const navbarHeight = navbarRef.current?.offsetHeight || 0
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - navbarHeight

        gsap.to(window, {
          duration: 0.5,
          scrollTo: {
            y: offsetPosition,
            autoKill: false
          },
          ease: "power2.inOut"
        })
      }

      setIsMenuOpen(false)
    }

    const links = document.querySelectorAll(".nav-link")
    links.forEach((link) => {
      link.addEventListener("click", handleClick)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick)
      })
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-70 backdrop-blur-lg shadow-md transform translate-y-0"
    >
      {/* Rest of the JSX remains the same */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="#Home" className="flex-shrink-0">
            <img
              className="h-8 w-auto"
              src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/n1inal9dy8b5nxlxpydr"
              alt="logo"
            />
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-8">
            <Link
              href="#Home"
              className="nav-link text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Início
            </Link>
            <Link
              href="#About"
              className="nav-link text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Sobre nos
            </Link>
            <Link
              href="#Servicos"
              className="nav-link text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Serviços
            </Link>
            <Link
              href="#Vantagens"
              className="nav-link text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Vantagens
            </Link>
            <Link
              href="#Produtos"
              className="nav-link text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Produtos
            </Link>
            <Link
              href="#Contacto"
              className="nav-link text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Fale Conosco
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="#Home"
            className="nav-link text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Início
          </Link>
          <Link
            href="#About"
            className="nav-link text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Sobre nos
          </Link>
          <Link
            href="#Servicos"
            className="nav-link text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Serviços
          </Link>
          <Link
            href="#Vantagens"
            className="nav-link text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Vantagens
          </Link>
          <Link
            href="#Produtos"
            className="nav-link text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Produtos
          </Link>
          <Link
            href="#Contacto"
            className="nav-link text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar