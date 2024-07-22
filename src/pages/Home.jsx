import SectionHeading from '../components/shared/SectionHeading';
import SectionParagraph from '../components/shared/SectionParagraph';
import SectionTitle from '../components/shared/SectionTitle';
import bottles from '/images/mobileBottles.png';
const Home = () => {
  return (
    <main>
      <section className='h-[550px] bg-gradient-purple relative'>
        <div className='p-6 z-10'>
          <SectionTitle>ჟუჟუნა</SectionTitle>
          <SectionHeading>
            ღვინო არც ისე წყნარი და არც ბოლომდე ცქრიალაა
          </SectionHeading>
          <SectionParagraph>
            მას ადრეულ რთველზე მიღებული რქაწითელითა და მწვანეთი ვამზადებთ,
            ამიტომაც სახასიათო სიმჟავე აქვს. მეორადი დუღილისგან კი ბუნებრივ
            მსუბუქ გაზს იძენს.
          </SectionParagraph>
        </div>
        <img
          src={bottles}
          alt='hero image with wine bottles'
          className='absolute bottom-0 right-0 z-0'
        />
      </section>
    </main>
  );
};

export default Home;
