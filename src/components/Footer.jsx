import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] text-gray-400 pt-10">
      

      {/* Bottom Bar */}
     <div className='px-5 md:px-20'>
          <div className="border-t border-cyan-400 text-center  py-4 text-sm">
            &copy; {new Date().getFullYear()} Pooja K. All rights reserved.
          </div>
     </div>
    </footer>
  );
};

export default Footer;
