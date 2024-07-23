const Navbar = ({ links }) => {
  return (
    <ul className='hidden text-black dark:text-white  md:flex gap-4 font-arialgeo'>
      {links.map((link) => {
        return (
          <li key={link.path}>
            <a href={`#${link.path}`}>{link.title}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
