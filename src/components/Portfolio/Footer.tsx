import { BackgroundBeamsWithCollision } from '../ui/background-beams-with-collision';

const Footer = () => {
  return (
    <BackgroundBeamsWithCollision className='mt-10'>
      <h2 className='text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight'>
        Construyamos juntos la
        <div className='relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]'>
          <div className='absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-primary via-violet-500 to-secondary dark:to-white [text-shadow:0_0_rgba(0,0,0,0.1)]'>
            <span className=''>aplicación/web que deseas.</span>
          </div>
          <div className='relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-primary via-violet-500 to-secondary dark:to-white py-4'>
            <span className=''>aplicación/web que deseas.</span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
  );
};

export default Footer;
