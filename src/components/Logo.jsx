import logoIcon from '../../public/images/logoIcon.svg';
const Logo = () => {
  return (
    <div className='h-[45px] w-[45px] bg-logoColor-circle flex justify-center items-center rounded-full'>
      <img src={logoIcon} alt={'jujuna company logo'} />
    </div>
  );
};

export default Logo;
