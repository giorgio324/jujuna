const Card = ({ item, index }) => {
  const isEven = index % 2 === 0;
  return (
    <div className='flex flex-col justify-center items-center max-w-[450px] mx-auto'>
      <img src={item.image} className='w-full' alt={item.title} />
      <div
        className={`text-white font-arialgeo  rounded-b-md px-2 py-5 flex flex-col items-start justify-start ${
          isEven ? 'bg-buttonColor-primary' : 'bg-black'
        }`}
      >
        <div className='h-[150px] md:h-[180px] flex flex-col gap-2 md:gap-4'>
          <p className='text-sm md:text-xl'>{item.date}</p>
          <h3 className='text-xl md:text-2xl'>{item.title}</h3>
          <p className='text-sm md:text-xl'>{item.text}</p>
        </div>
        <div className='flex justify-end w-full mt-2'>
          <button
            className={`rounded-full px-2 py-1 md:text-lg md:py-2 md:px-3 ${
              !isEven ? 'bg-buttonColor-primary' : 'bg-black'
            }`}
          >
            გაიგე მეტი
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
