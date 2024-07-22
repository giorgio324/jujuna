import React from 'react';
import Reveal from '../animation/Reveal';

const SectionTitle = ({ children }) => {
  return (
    <Reveal>
      <h1 className='text-color-primary dark:text-color-black text-5xl font-tommaso'>
        {children}
      </h1>
    </Reveal>
  );
};

export default SectionTitle;
