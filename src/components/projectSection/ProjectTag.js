const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-gradient-to-r from-blue-500 to-indigo-600 border-transparent"
    : "text-gray-600 bg-transparent border-gray-300 hover:border-blue-500 hover:text-blue-500";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-lg 
      cursor-pointer transition-all ease-in-out duration-300`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
