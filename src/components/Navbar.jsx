const Navbar = ({ links }) => {
  const handleLinkClick = (e, path) => {
    e.preventDefault();
    const targetElement = document.getElementById(path);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <ul className='hidden text-black dark:text-white  md:flex gap-4 font-arialgeo'>
      {links.map((link) => {
        return (
          <li key={link.path}>
            <a
              href={`#${link.path}`}
              onClick={(e) => handleLinkClick(e, link.path)}
            >
              {link.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
