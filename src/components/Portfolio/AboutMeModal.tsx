import { Dispatch, FC, SetStateAction } from 'react';
import { Link, unstable_useViewTransitionState } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BackgroundGradient } from '@/components/ui/backgroundGradient';
import { BiSolidLeftArrow } from 'react-icons/bi';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { TypeAnimation } from 'react-type-animation';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Logo from '/RJ-Logo.png';
import Foto from '/foto.jpg';
import { IoDownload } from 'react-icons/io5';

interface AboutMeModalInterface {
  aboutModal: boolean;
  setAboutModal: Dispatch<SetStateAction<boolean>>;
}

const AboutMeModal: FC<AboutMeModalInterface> = ({
  aboutModal,
  setAboutModal,
}) => {
  const isTransitioning = unstable_useViewTransitionState(`/`);

  //   HandleClick
  const handleClick = () => {
    setAboutModal(!aboutModal);
  };

  return (
    <section
      className={`fixed z-[100] top-0 ${
        aboutModal ? 'left-0' : 'left-[-360px]'
      } w-[360px] h-[100dvh] dark:bg-secondary bg-white transition-all`}
    >
      {/* Boton con logo */}
      <button className='absolute right-[-40px] top-7' onClick={handleClick}>
        <BackgroundGradient className='w-[80px]' containerClassName=''>
          <img
            style={{
              viewTransitionName: isTransitioning ? 'prueba' : '',
            }}
            src={Logo}
            className={`rounded-full w-[80px] invert dark:filter-none`}
            alt=''
          />
        </BackgroundGradient>
      </button>

      {/* Acerca de mi */}
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        transition={{
          delay: 0.3,
          duration: 3,
          ease: 'easeInOut',
        }}
        className='absolute right-[-173px] top-14 bg-primary dark:bg-white text-white dark:text-black py-0.5 px-2 flex justify-center items-center gap-3 rounded-sm'
      >
        <BiSolidLeftArrow />
        <span className='font-semibold'>Acerca de mi</span>
      </motion.div>

      {/* Contenido */}
      <div className='flex flex-col p-5 dark:text-white h-full'>
        <Link
          to='/'
          replace={true}
          className='self-start flex items-center gap-1 dark:text-white'
          unstable_viewTransition
        >
          <BiLeftArrowAlt className='w-6 h-6' />
          Linktree
        </Link>

        <img
          src={Foto}
          alt='Foto de perfil de Raul Arias'
          className='w-[170px] h-[170px] object-cover rounded-full self-center mt-6'
        />

        <h1 className='text-[40px] font-bold mt-4'>Raul Arias</h1>

        <TypeAnimation
          sequence={['FullStack Developer', 2000, 'Desarrollador Web', 2000]}
          speed={25}
          className='text-primary dark:text-primary-dark text-[20px] font-semibold'
          wrapper='h3'
          repeat={Infinity}
        />

        <p className='mt-2'>
          {' '}
          Soy desarrollador web con 2 años de experiencia sumamente responsable,
          apasionado por la tecnología, atento al detalle, constantemente
          sumando y reforzando conocimientos que me ayuden en mi vida
          profesional para ofrecer las mejores soluciones.
        </p>
        <p className='mt-2 font-semibold'>Aragua, Venezuela 📍.</p>

        {/* Whatsapp, Linkedin, Instagram, Curriculum */}
        <div className='flex gap-3 mt-auto justify-center'>
          {/* Whatsapp */}
          <Link to='https://wa.me/584128369842' target='_blank'>
            <FaWhatsapp className='w-10 h-10 text-primary' />
          </Link>

          {/* Linkedin */}
          <Link to='https://www.linkedin.com/in/rauljariasz/' target='_blank'>
            <FaLinkedin className='w-10 h-10 text-primary' />
          </Link>

          {/* Instagram */}
          <Link to='https://www.instagram.com/rauljariasz/' target='_blank'>
            <FaInstagram className='w-10 h-10 text-primary' />
          </Link>

          {/* Curriculum */}
          <Link
            to='https://drive.google.com/file/d/1aW2PwxjOn3lEmAuTXuK6hT6OQDR0w4mB/view?usp=drive_link'
            target='_blank'
          >
            <IoDownload className='w-10 h-10 text-primary' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMeModal;
