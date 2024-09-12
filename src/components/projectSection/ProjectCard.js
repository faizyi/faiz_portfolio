import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <motion.div
      className="relative rounded-xl overflow-hidden shadow-lg group  flex justify-center"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Tag for Project Image */}
      <img
        src={imgUrl}
        alt={title}
        className="w-50 h-52 rounded-xl md:h-72 object-cover transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-500 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center text-white px-4">
          <h5 className="text-2xl font-bold">{title}</h5>
          <p className="mt-2 text-sm">{description}</p>
          <div className="mt-4 flex justify-center space-x-4">
            {/* <Link href={gitUrl} target="_blank" className="flex items-center">
              <CodeBracketIcon className="h-8 w-8 text-white" />
            </Link> */}
            <Link href={previewUrl} target="_blank" className="flex items-center">
              <EyeIcon className="h-8 w-8 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
