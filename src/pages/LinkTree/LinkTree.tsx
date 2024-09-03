// import { AuroraBackground } from '@/components/ui/auroraBackground';
import Logo from '/RJ-Logo.png';
import { BackgroundGradient } from '@/components/ui/backgroundGradient';
import { Meteors } from '@/components/ui/meteors';
import { Link, unstable_useViewTransitionState } from 'react-router-dom';

import { FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa6';
import WhatsappButton from '@/components/common/WhatsappButton';
import DarkModeButton from '@/components/common/DarkModeButton';
// import { IoDownload } from 'react-icons/io5';

const LinkTree = () => {
  const isTransitioning = unstable_useViewTransitionState(`/portfolio`);
  return (
    <div className='h-[100dvh] w-full flex justify-center items-center bg-gradient-to-b  from-slate-300 to-slate-500 dark:from-slate-900 dark:to-slate-700'>
      <WhatsappButton />
      <DarkModeButton />
      <main className='px-6 w-full flex justify-center'>
        <div className='relative flex flex-col gap-4 items-start px-4 pb-8 pt-10 justify-center bg-white text-black dark:bg-[#141D23] dark:text-white rounded-2xl max-w-[395px] w-full dark:border border  border-primary'>
          {/* Logo Imagen */}
          <BackgroundGradient
            className='w-[80px]'
            containerClassName='absolute left-[calc(50%-40px)] top-[-55px]'
          >
            <img
              src={Logo}
              className={`rounded-full invert dark:filter-none`}
              alt=''
              style={{
                viewTransitionName: isTransitioning ? 'prueba' : '',
              }}
            />
          </BackgroundGradient>

          {/* Buttons section */}
          <section className='w-full flex flex-col gap-4 mt-5'>
            {/* Linkedin */}
            <Link
              to='https://www.linkedin.com/in/rauljariasz/'
              target='blank'
              className='w-full h-[49px] overflow-hidden relative border border-primary rounded-full font-bold flex justify-center items-center text-primary dark:text-white dark:border-white'
            >
              <FaLinkedin className='absolute left-4 w-6 h-6 z-20' />
              Linkedin
              <Meteors number={5} />
            </Link>

            {/* Instagram */}
            <Link
              to='https://www.instagram.com/rauljariasz/'
              target='blank'
              className='w-full h-[49px] overflow-hidden relative border border-primary rounded-full font-bold flex justify-center items-center text-primary dark:text-white dark:border-white'
            >
              <AiFillInstagram className='absolute left-4 w-6 h-6 z-20' />
              Instagram
              <Meteors number={5} />
            </Link>

            {/* Github */}
            <Link
              to='https://github.com/rauljariasz'
              target='blank'
              className='w-full h-[49px] overflow-hidden relative border border-primary rounded-full font-bold flex justify-center items-center text-primary dark:text-white dark:border-white'
            >
              <FaGithubSquare className='absolute left-4 w-6 h-6 z-20' />
              Github
              <Meteors number={5} />
            </Link>

            {/* Curriculum */}
            {/* <Link
              to='https://drive.google.com/file/d/1aW2PwxjOn3lEmAuTXuK6hT6OQDR0w4mB/view?usp=drive_link'
              target='blank'
              className='w-full h-[49px] overflow-hidden relative border border-primary rounded-full font-bold flex justify-center items-center text-primary dark:text-white dark:border-white'
            >
              <IoDownload className='absolute left-4 w-6 h-6 z-20' />
              Curriculum
              <Meteors number={5} />
            </Link> */}

            {/* Ver portafolio */}
            <Link
              to='/portfolio'
              className='w-full h-[49px] overflow-hidden relative border border-primary rounded-full font-bold flex justify-center items-center text-primary dark:text-white dark:border-white'
              unstable_viewTransition
            >
              <FaGlobe className='absolute left-4 w-6 h-6 z-20' />
              Portfolio <Meteors number={5} />
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
};

export default LinkTree;
