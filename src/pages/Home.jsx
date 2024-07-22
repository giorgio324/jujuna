import SectionHeading from '../components/shared/SectionHeading';
import SectionParagraph from '../components/shared/SectionParagraph';
import SectionTitle from '../components/shared/SectionTitle';
import mobilebottle from '/images/bottleMobile.png';
import desktopBottle from '/images/bottleDesktop.png';
const Home = () => {
  return (
    <main>
      <section className='h-[600px] md:h-[740px] bg-gradient-purple relative'>
        <div className='px-8 z-10'>
          <div className='pt-6 md:pt-[80px] flex flex-col md:gap-12'>
            <SectionTitle>ჟუჟუნა</SectionTitle>
            <div className='max-w-[420px]'>
              <SectionHeading>
                ღვინო არც ისე წყნარი და არც ბოლომდე ცქრიალაა
              </SectionHeading>
            </div>
            <div className='max-w-[700px]'>
              <SectionParagraph>
                მას ადრეულ რთველზე მიღებული რქაწითელითა და მწვანეთი ვამზადებთ,
                ამიტომაც სახასიათო სიმჟავე აქვს. მეორადი დუღილისგან კი ბუნებრივ
                მსუბუქ გაზს იძენს.
              </SectionParagraph>
            </div>
          </div>
          <img
            src={desktopBottle}
            alt='wine bottles'
            className='absolute right-0 bottom-0 '
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
