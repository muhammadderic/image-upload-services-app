"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const pathname = usePathname();

  const toggleExpanded = () => {
    setExpanded(!expanded);
  }

  const navLinks = [
    {
      name: "Clodinary",
      path: "/cloudinary",
    },
    {
      name: "EdgeStore",
      path: "/edgestore",
    },
    {
      name: "UploadThing",
      path: "/uploadthing",
    }
  ]

  return (
    <header className="py-8 bg-white shadow-md">
      <div className="container flex justify-between px-4 mx-auto sm:px-6 lg:px-8">
        {/* LOGO */}
        <div className="flex-shrink-0">
          <a
            href="/"
            title="mucodevde"
            className="flex font-bold text-sm lg:text-xl"
          >
            IMAGE UPLOAD SERVICES APP
          </a>
          <p className="flex justify-end text-xxs font-gray-200">
            powered by muhammadderic
          </p>
        </div>

        {/* HUMBERGER MENU */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="text-gray-900"
            onClick={toggleExpanded}
            aria-expanded={expanded}
          >
            <span aria-hidden="true">
              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {
                  expanded ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )
                }
              </svg>
            </span>
          </button>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex md:items-center md:justify-center md:space-x-16">
          {
            navLinks.map((item, i) => {
              return (
                <Link
                  key={i}
                  href={item.path}
                  title={item.name}
                  className={`text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 ${pathname === item.path
                    ? "bg-slate-800 text-white py-2.5 px-4 rounded-md"
                    : ""
                    } `}
                >
                  {item.name}
                </Link>
              )
            })
          }
        </div>
      </div>

      {/* EXPANDED NAVIGATION MENU */}
      <nav style={{ display: expanded ? "block" : "none" }}>
        <div className="flex md:hidden flex-col px-4 py-8">
          <div className="ml-auto px-4 grid text-right gap-y-7">
            {
              navLinks.map((item, i) => {
                return (
                  <Link
                    key={i}
                    href={item.path}
                    title={item.name}
                    className="px-4 text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    {item.name}
                  </Link>
                );
              })
            }
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
