import { Link, NavLink } from "@remix-run/react";

interface INavItem {
  name: string;
  href: string;
}

const navItems: INavItem[] = [
  { name: 'Home', href: '/'},
  { name: 'Foods', href: '/foods'},
  { name: 'Log In', href: '/auth/login'},
];

export default function Header() {

  const navElements = navItems.map(navItem => {
      return (
        <li key={navItem.name}>
          <NavLink 
            to={navItem.href} 
            className={({ isActive }) => 
              isActive
                ? "underline"
                : ""
            }
          >
            {navItem.name}
          </NavLink> 
        </li>
      )
  });

  return (
    <header className="h-[4rem]">
      <nav className="h-full px-8 flex items-center justify-between" aria-label="Global">
        
        {/* Brand */}
        <div className="flex lg:flex-1">
          <Link to="/" className="p-1.5 text-lg font-bold lg:text-2xl">Fast Food</Link>
        </div>

        {/* Navigations items */}
        <ul className="mr-6 hidden flex-row justify-end items-center gap-4 md:flex md:flex-1">
          {navElements}
        </ul>

        <div className="flex">
          {/* Cart */}
          <div className="flex lg:flex-1">
            <span className="sr-only">Open the cart</span>
            <Link to="#">
              Cart 
              <span>0</span>
            </Link>
          </div>
          
          {/* Hamburger Menu */}
          <div className="flex md:hidden">
            <button
              type="button"
            >
              <span className="sr-only">Open side drawer</span>
              <p>Menu</p>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
