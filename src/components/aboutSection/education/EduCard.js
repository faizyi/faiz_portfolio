const EduCard = ({ institution, degree, startDate, endDate }) => {
  return (
    <div className='bg-gray-800 rounded-lg p-6 shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl'>
      <div className='flex flex-col md:flex-row items-center justify-between'>
        {/* Institution Name */}
        <h3 className='text-xl font-semibold text-white'>{institution}</h3>
        {/* Date Range */}
        <p className='text-sm text-gray-400 mt-2 md:mt-0'>{startDate} - {endDate}</p>
      </div>

      {/* Degree Information */}
      <div className='mt-4'>
        <p className='text-lg text-white'>{degree}</p>
      </div>
    </div>
  );
};

export default EduCard;
