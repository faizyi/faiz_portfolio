const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-primary-500 border-primary-500"
    : "text-gray-600 bg-transparent border-gray-300 hover:border-primary-500 hover:text-primary-500";
    
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-2 text-base sm:text-lg cursor-pointer transition-all`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
