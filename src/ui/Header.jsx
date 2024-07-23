import { useState } from 'react';
import Logo from '../components/Logo';
import MobileMenu from '../components/MobileMenu';
import Navbar from '../components/Navbar';
import geo from '/images/geo.png';
import usa from '/images/usa.png';
const Header = () => {
  const links = [
    { title: 'ჩვენ შესახებ', path: 'about' },
    { title: 'სიახლეები', path: 'news' },
    { title: 'ბოთლი', path: 'bottle' },
    { title: 'მობილური ბარი', path: 'bar' },
    { title: 'კონტაქტი', path: 'contact' },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-backgroundColor-backgroundCol dark:bg-backgroundColor-dark-backgroundCol px-6'>
      <nav className='h-[96px] md:h-[67px] flex justify-between items-end md:justify-evenly md:items-center pb-3'>
        <Logo />
        <Navbar links={links} />
        <MobileMenu links={links} isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className='hidden md:flex gap-1'>
          <img src={geo} alt='georgian language button' />
          <img src={usa} alt='english language button' />
        </div>
      </nav>
    </div>
  );
};

export default Header;
