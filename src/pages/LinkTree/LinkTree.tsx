import { AuroraBackground } from '@/components/ui/auroraBackground';
import { motion } from 'framer-motion';
import Logo from '/RJ-Logo.png';
import { BackgroundGradient } from '@/components/ui/backgroundGradient';
import { Meteors } from '@/components/ui/meteors';
import { Link } from 'react-router-dom';

import { FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';
import { IoDownload } from 'react-icons/io5';
// import { FaGlobe } from 'react-icons/fa6';

const LinkTree = () => {
  return (
    <AuroraBackground>
      <main className='px-6 w-full flex justify-center'>
        <motion.div
          initial={{ opacity: 0.0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className='relative flex flex-col gap-4 items-start px-4 pb-8 pt-10 justify-center bg-white text-black dark:bg-black dark:text-white rounded-2xl max-w-[395px] w-full dark:border border  border-[#6694b3]'
        >
          {/* Logo Imagen */}
          <BackgroundGradient
            className='w-[80px]'
            containerClassName='absolute left-[calc(50%-40px)] top-[-55px]'
          >
            <img
              src={Logo}
              className='rounded-full invert dark:filter-none'
              alt=''
            />
          </BackgroundGradient>

          {/* Buttons section */}
          <section className='w-full flex flex-col gap-4 mt-5'>
            {/* Linkedin */}
            <Link
              to='https://www.linkedin.com/in/rauljariasz/'
              target='blank'
              className='w-full h-[49px] overflow-hidden relative border border-[#6694b3] rounded-full font-bold flex justify-center items-center text-[#6694b3] dark:text-white dark:border-white'
            >
              <FaLinkedin className='absolute left-4 w-6 h-6 z-20' />
              Linkedin
              <Meteors number={20} />
            </Link>

            {/* Instagram */}
            <Link
              to='https://www.instagram.com/rauljariasz/'
              target='blank'
              className='w-full h-[49px] overflow-hidden relative border border-[#6694b3] rounded-full font-bold flex justify-center items-center text-[#6694b3] dark:text-white dark:border-white'
            >
              <AiFillInstagram className='absolute left-4 w-6 h-6 z-20' />
              Instagram
              <Meteors number={20} />
            </Link>

            {/* Github */}
            <Link
              to='https://github.com/rauljariasz'
              target='blank'
              className='w-full h-[49px] overflow-hidden relative border border-[#6694b3] rounded-full font-bold flex justify-center items-center text-[#6694b3] dark:text-white dark:border-white'
            >
              <FaGithubSquare className='absolute left-4 w-6 h-6 z-20' />
              Github
              <Meteors number={20} />
            </Link>

            {/* Curriculum */}
            <Link
              to='https://drive.google.com/file/d/1aW2PwxjOn3lEmAuTXuK6hT6OQDR0w4mB/view?usp=drive_link'
              target='blank'
              className='w-full h-[49px] overflow-hidden relative border border-[#6694b3] rounded-full font-bold flex justify-center items-center text-[#6694b3] dark:text-white dark:border-white'
            >
              <IoDownload className='absolute left-4 w-6 h-6 z-20' />
              Curriculum
              <Meteors number={20} />
            </Link>

            {/* Ver portafolio */}
            {/* <Link
              to='https://drive.google.com/file/d/1aW2PwxjOn3lEmAuTXuK6hT6OQDR0w4mB/view?usp=drive_link'
              target='blank'
              className='w-full h-[49px] overflow-hidden relative border border-[#6694b3] rounded-full font-bold flex justify-center items-center text-[#6694b3] dark:text-white dark:border-white'
            >
              <FaGlobe className='absolute left-4 w-6 h-6 z-20' />
              Ver portfolio
              <Meteors number={20} />
            </Link> */}
          </section>
        </motion.div>
      </main>
    </AuroraBackground>
  );
};

export default LinkTree;
