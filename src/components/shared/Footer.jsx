import NavItem from "./NavItem";

const footerLinks = [
  { label: "Website terms of use", link: "/website-terms-of-use" },
  { label: "Important disclosures", link: "/important-disclosures" },
  { label: "Privacy policy", link: "/privacy-policy" },
];

const Footer = () => {
  return (
    <footer>
      <ul className="text-[1.75vh] flex  text-gray-600  border-y  justify-between items-center px-4 py-2 border-gray-500 divide-x divide-gray-500 gap-4 text-center">
        {footerLinks.map(({ label, link }, i) => (
          <li key={i} className="w-full h-full px-2">
            <NavItem label={label} link={link} />
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
