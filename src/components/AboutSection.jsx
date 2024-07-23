import React from 'react';
import SectionTitle from './shared/SectionTitle';
import SectionParagraph from './shared/SectionParagraph';

const AboutSection = ({ id }) => {
  return (
    <section id={id}>
      <div className="bg-[url('/images/marani.png')] h-[530px] md:h-[680px] bg-right bg-cover bg-no-repeat">
        <div className='py-4 px-6 md:py-[70px] md:px-8 flex flex-col gap-4 md:gap-12'>
          <SectionTitle>ჩვენ შესახებ</SectionTitle>
          <div className='max-w-[900px]'>
            <SectionParagraph>
              ჟუჟუნა ძალიან მშრალი და მომჟავო ღვინო 2017 წელს შეიქმნა. ბევრი
              ფიქრისა და ღვინის მრავალწლიანი სიყვარულის შემდეგ, კომპანია,
              ჩვენივე სახსრებით, 6-მა მეგობარმა დავაარსეთ. ჩვენი მთავარი მიზანი,
              დალევის კულტურის განსხვავებული გამოცდილების შექმნა და აქამდე
              არარსებული თანამდეროვე ღვინის თანამედროვე კულტურაში პოპულარიზაცია
              იყო. ჩამოსასხმელი ჟუჟუნა საქართველოს უამრავ კაფე-ბარს მალევე
              დაუმეგობრდა და 2020 წელს ბოთლის ფორმითაც შეავსო მაღაზიათა ქსელი,
              რაც ასეთ მოკლე დროში, ჩვენთვის, მნიშვნელოვანი სიახლეა. ჟუჟუს
              ისტორია საქართველოს ფარგლებსაც სცდება და ჩინეთსა და იაპონიაში
              ექსპორტით გააქვს თბილისური დალევის კულტურა.
            </SectionParagraph>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
