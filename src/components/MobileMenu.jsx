import { AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import MobileMenuHeader from './MobileMenuHeader';
import MobileMenuLinks from './MobileMenuLinks';

const MobileMenu = ({ isOpen, setIsOpen, links }) => {
  const openNavbar = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeNavbar = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <button
        className='md:hidden font-tommaso text-2xl text-color-black dark:text-color-dark-black'
        onClick={openNavbar}
      >
        მენიუ
      </button>
      {createPortal(
        <AnimatePresence mode='wait'>
          {isOpen && (
            <motion.aside className='inset-0 fixed flex justify-end items-center z-50'>
              {/* backdrop */}
              <motion.div
                className='inset-0 absolute bg-black z-10 cursor-pointer'
                onClick={closeNavbar}
                key='backdrop'
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
              />
              {/* content */}
              <motion.div
                className='h-full w-[80%] bg-backgroundColor-backgroundCol dark:bg-backgroundColor-dark-backgroundCol
                 z-20 p-6 pb-12 text-black dark:text-white flex flex-col gap-4'
                key='content'
                initial={{ translateX: '100%' }}
                animate={{ translateX: '0%', transition: { duration: 0.3 } }}
                exit={{ translateX: '100%', transition: { duration: 0.3 } }}
              >
                <MobileMenuHeader closeNavbar={closeNavbar} />
                <MobileMenuLinks links={links} closeNavbar={closeNavbar} />
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default MobileMenu;
