import Logo from '../components/Logo';
import MobileMenu from '../components/MobileMenu';

const Header = () => {
  return (
    <div className='bg-backgroundColor-backgroundCol px-6'>
      <nav className='h-[96px] flex justify-between items-end pb-3'>
        <Logo />
        <MobileMenu />
      </nav>
    </div>
  );
};

export default Header;
