import Reveal from '../animation/Reveal';

const SectionParagraph = ({ children }) => {
  return (
    <Reveal>
      <p className='mt-6 font-arialgeo text-color-primary text-sm md:text-xl'>
        {children}
      </p>
    </Reveal>
  );
};

export default SectionParagraph;
