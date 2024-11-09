import Link from "next/link";
const DownloadCVButton = () => {
  return (
    <Link href="/cv/my-cv.pdf" target="_blank" passHref>
    <button 
        className="inline-block py-3 px-8 bg-gradient-to-r from-[#4744eb] via-[#215cdb] to-[#0011ff]
        text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 
        transition-all duration-300"
        download
      >
        Download CV
      </button>
    </Link>
  );
};

export default DownloadCVButton;
