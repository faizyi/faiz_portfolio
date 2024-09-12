const EduCard = ({ institution, degree, startDate, endDate }) => {
    return (
      <div className='w-80 max-w-lg p-4 bg-sh-dark-500 border-2 border-sh-dark rounded-lg 
      text-sh-white hover:shadow-lg transition-transform transform ease-in hover:scale-105'>
        <div className='flex items-center gap-3'>
          <h3 className='block text-lg md:text-xl font-bold'>
            {institution}
          </h3>
        </div>
        <div className='mt-1'>
          <p>{degree}</p>
          <p className='text-sm text-sh-white-500'>
            <span>{startDate}</span> - <span>{endDate}</span>
          </p>
        </div>
      </div>
    );
  };
  
  export default EduCard;
  