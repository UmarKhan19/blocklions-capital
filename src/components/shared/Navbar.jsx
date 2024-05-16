import NavItem from "./NavItem";

const navLinks = [
  {
    label: "About",
    link: "/",
  },
  {
    label: "Portfolio",
    link: "/portfolio",
  },
  {
    label: "Contact",
    link: "/contact",
  },
  {
    label: "Open Source",
    link: "/open-source",
  },
];

const Navbar = () => {
  return (
    <nav className="space-y-4">
      <>
        <img src="/images/logo.png" className="w-48" />
      </>
      <>
        <ul className="text-[1.75vh] flex  text-gray-600  border-y  justify-between items-center px-4 py-2 border-gray-500 divide-x divide-gray-500 gap-4 text-center">
          {navLinks.map(({ label, link }, i) => {
            return (
              <li key={i} className="w-full h-full">
                <NavItem label={label} link={link} />
              </li>
            );
          })}
        </ul>
      </>
    </nav>
  );
};

export default Navbar;
