import Logo from '../components/Logo';
import ThemeToggleButton from '../components/ThemeToggleButton';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const data = [
    { title: 'ტელეფონი', text: '+995579760006' },
    { title: 'ელ.ფოსტა', text: 'Hello@jujuna.ge' },
    { title: 'მისამართი', text: 'ნინოშვილი #8 თბილისი,საქართველო' },
  ];

  const links = [
    { link: 'https://instagram.com', icon: FaInstagram },
    { link: 'https://facebook.com', icon: FaFacebook },
    { link: 'https://linkedin.com', icon: FaLinkedin },
  ];

  return (
    <footer className='bg-white dark:bg-black border-t-2'>
      <div className='px-8 py-4 md:py-6'>
        <div className='flex gap-2 justify-between'>
          <div className='flex gap-2'>
            <div>
              <Logo />
            </div>
            <div>
              {data.map((item) => {
                return (
                  <div
                    key={item.title}
                    className='flex flex-col gap-2 dark:text-white text-black'
                  >
                    <p className='text-sm md:text-lg'>{item.title}</p>
                    <p className='text-sm md:text-lg'>{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='flex gap-1 items-end'>
            {links.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className='dark:text-white md:text-2xl'
              >
                <link.icon />
              </a>
            ))}
          </div>
        </div>
        <div className='text-black dark:text-gray-500 flex gap-2 md:gap-6 justify-end'>
          <p className='text-sm md:text-lg'>
            პერსონალური მონაცმების დაცვის პოლიტიკა
          </p>
          <p className='text-sm md:text-lg'>უსაფრთხოების ცენტრი</p>
        </div>
        <ThemeToggleButton />
      </div>
    </footer>
  );
};

export default Footer;
