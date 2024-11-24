import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description, shortDescription, gitUrl, previewUrl }) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center rounded-xl 
      overflow-hidden transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Section */}
      <div className="md:w-2/5 rounded-xl overflow-hidden">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details Section */}
      <div className="p-6 md:w-3/5 flex flex-col justify-between text-white rounded-r-xl">
        <h5 className="text-2xl font-bold mb-4">{title}</h5>
        <p className="text-sm text-gray-300 mb-2">{shortDescription}</p>
        <p className="text-base mb-6">{description}</p>
        <div className="flex space-x-4">
          {/* GitHub Link */}
          <Link
            href={gitUrl}
            target="_blank"
            className="flex items-center px-4 py-2 text-sm font-medium bg-gray-700 rounded-lg shadow hover:bg-gray-600"
          >
            <CodeBracketIcon className="h-5 w-5 mr-2" />
            GitHub
          </Link>
          {/* Preview Link */}
          <Link
            href={previewUrl}
            target="_blank"
            className="flex items-center px-4 py-2 text-sm font-medium bg-blue-500 rounded-lg shadow hover:bg-blue-400"
          >
            <EyeIcon className="h-5 w-5 mr-2" />
            Preview
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
