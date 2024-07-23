import Stagger from './animation/Stagger';

const MobileMenuLinks = ({ closeNavbar, links }) => {
  const handleLinkClick = (e, path) => {
    e.preventDefault();
    const targetElement = document.getElementById(path);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      closeNavbar();
    }
  };
  return (
    <div className='flex-grow flex flex-col gap-4'>
      {links.map((link, index) => (
        <Stagger
          key={link.title}
          delay={0.2}
          index={index}
          className='w-fit'
          directionX='right-to-left'
        >
          <a
            className='font-tommaso text-2xl'
            href={`#${link.path}`}
            onClick={(e) => handleLinkClick(e, link.path)}
          >
            {link.title}
          </a>
        </Stagger>
      ))}
    </div>
  );
};
export default MobileMenuLinks;
