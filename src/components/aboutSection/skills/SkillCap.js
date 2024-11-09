import Image from 'next/image';

const SkillCap = ({ name, logo }) => {
  return (
    <div className='bg-gray-800 rounded-lg p-6 flex items-center justify-center 
      hover:bg-gray-700 hover:shadow-2xl transform transition-all ease-in-out hover:scale-105 cursor-pointer'>
      
      {/* Skill Logo */}
      <div className='relative h-16 w-16'>
        <Image
          src={logo}
          fill
          style={{ objectFit: 'contain' }} // Ensures image scales well
          draggable={false}
          alt={`${name} logo`}
        />
      </div>
      
      {/* Skill Name */}
      <h3 className='ml-4 text-xl text-white font-semibold'>{name}</h3>
    </div>
  );
};

export default SkillCap;
