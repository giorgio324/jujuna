import Reveal from '../animation/Reveal';

const SectionHeading = ({ children }) => {
  return (
    <Reveal>
      <h2 className='mt-6 text-color-secondary text-4xl md:text-[48px] font-tommaso'>
        {children}
      </h2>
    </Reveal>
  );
};

export default SectionHeading;
