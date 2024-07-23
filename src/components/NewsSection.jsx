import Card from './Card';
import pour from '../assets/images/pour.png';
import glasswine from '../assets/images/glasswine.png';
import grape from '../assets/images/grape.png';
import SectionTitle from './shared/SectionTitle';
const NewsSection = ({ id }) => {
  const data = [
    {
      image: pour,
      date: '17 აგვისტო, 2024',
      title: 'დეგიუსტაცია',
      text: 'დააგემოვნეთ ჩვენი ღვინო ყოველწლიურად გამართულ დეგუსტაციაზე და იგრძენით ნამდვილი გემო',
    },
    {
      image: grape,
      date: '25 სექტემბერი, 2024',
      title: 'რთველი',
      text: 'ეწვიეთ ჩვენს რთველს და შეიტყვეთ მეტი ჟუჟუნას წარმოების პროცესზე და მის წარმომავლობაზე',
    },
    {
      image: glasswine,
      date: '2 ოქტომბერი, 2024',
      title: 'ღვინის საღამო',
      text: 'ჩვენი ღვინო, ჯაზის მუსიკა, კომფორტული საღამო. გაატარეთ დაუვიწყარი საღამო ჩვენთან ერთად',
    },
  ];
  return (
    <section id={id}>
      <div className='flex flex-col gap-5 px-8'>
        <SectionTitle textDark>სიახლეები</SectionTitle>
        <div className='flex flex-wrap gap-2'>
          {data.map((item, index) => {
            return <Card key={index} item={item} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
