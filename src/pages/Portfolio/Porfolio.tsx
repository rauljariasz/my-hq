import AboutMeModal from '@/components/Portfolio/AboutMeModal';
import ExperienciaLaboral from '@/components/Portfolio/ExperienciaLaboral';
import Footer from '@/components/Portfolio/Footer';
import Habilidades from '@/components/Portfolio/Habilidades';
import LogoSlider from '@/components/Portfolio/LogoSlider';
import Proyectos from '@/components/Portfolio/Proyectos';
import { useState } from 'react';

const Porfolio = () => {
  const [aboutModal, setAboutModal] = useState(false);

  return (
    <div className='min-h-[100dvh] pt-7  bg-gradient-to-b  from-slate-300 to-slate-200 dark:from-slate-900 dark:to-slate-700'>
      {/* Modal "About Me" */}
      <AboutMeModal aboutModal={aboutModal} setAboutModal={setAboutModal} />
      {/* Transparencia */}
      <div
        onClick={() => setAboutModal(false)}
        className={`w-[100%] h-[100dvh] ${
          aboutModal ? 'fixed top-0 left-0' : 'hidden'
        } bg-[#000000aa] transition-all backdrop-blur-[5px] z-[99]`}
      ></div>

      {/* Logo Slider */}
      <LogoSlider />

      {/* Contenido */}
      <main className='px-6 lg:px-0 max-w-[900px] mx-auto mt-[40px]'>
        {/* Experiencia laboral */}
        <ExperienciaLaboral />

        {/* Proyectos */}
        <Proyectos />

        {/* Habilidades */}
        <Habilidades />
      </main>

      <Footer />
    </div>
  );
};

export default Porfolio;
