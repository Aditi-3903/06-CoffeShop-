import { Search } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Coffee", href: "/coffee" },
  { label: "Bakery", href: "/bakery" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 z-50 w-full px-10 py-4 font-poppins text-white">
      <nav
        className="flex h-16 w-full items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="/"
          className="nav-logo px-7 text-5xl font-bold uppercase"
          aria-label="Coffee home"
        >
          <span className="text-6xl">C</span>offee
        </a>

        {/* Navigation */}
        <ul className="nav-items flex items-center justify-center gap-8 text-xl uppercase">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="nav-item transition-opacity duration-200 hover:opacity-70"
              >
                {item.label}
              </a>
            </li>
          ))}

          <li>
            <a
              href="/login"
              className="nav-item font-semibold transition-opacity duration-200 hover:opacity-70"
            >
              Login
            </a>
          </li>
        </ul>

        {/* Search */}
        <button
          type="button"
          className="nav-search mr-16 flex items-center justify-center"
          aria-label="Search"
        >
          <Search className="size-9" strokeWidth={1.5} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;