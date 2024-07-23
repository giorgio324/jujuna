import React from 'react';
import Reveal from '../animation/Reveal';

const SectionTitle = ({ children, textDark }) => {
  return (
    <Reveal>
      <h1
        className={`text-5xl md:text-[72px] font-tommaso ${
          textDark ? 'text-black' : 'text-color-primary dark:text-color-black '
        }`}
      >
        {children}
      </h1>
    </Reveal>
  );
};

export default SectionTitle;
