import { Accordion, AccordionItem } from '@nextui-org/react';
import {
  FaNode,
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaGitSquare,
  FaSass,
  FaJira,
  FaBitbucket,
  FaFigma,
} from 'react-icons/fa';
import {
  SiExpress,
  SiMysql,
  SiNextdotjs,
  SiPrisma,
  SiVite,
  SiNetlify,
  SiRailway,
} from 'react-icons/si';
import { IoLogoJavascript, IoLogoVercel } from 'react-icons/io5';
import { RiTailwindCssFill } from 'react-icons/ri';
import {
  BiLogoPostgresql,
  BiLogoTypescript,
  BiLogoMongodb,
} from 'react-icons/bi';
import { FaSquareGithub } from 'react-icons/fa6';

const frontend = [
  { id: 1, component: FaReact, name: 'React' },
  { id: 2, component: IoLogoJavascript, name: 'JavaScript' },
  { id: 3, component: FaCss3Alt, name: 'CSS3' },
  { id: 4, component: RiTailwindCssFill, name: 'Tailwind CSS' },
  { id: 5, component: FaHtml5, name: 'HTML5' },
  { id: 6, component: SiNextdotjs, name: 'Next.js' },
  { id: 7, component: BiLogoTypescript, name: 'TypeScript' },
  { id: 8, component: FaSass, name: 'Sass' },
];

const backend = [
  { id: 1, component: FaNode, name: 'Node.js' },
  { id: 2, component: SiExpress, name: 'Express' },
  { id: 3, component: IoLogoJavascript, name: 'JavaScript' },
  { id: 4, component: BiLogoPostgresql, name: 'PostgreSQL' },
  { id: 5, component: SiMysql, name: 'MySQL' },
  { id: 6, component: BiLogoTypescript, name: 'TypeScript' },
  { id: 7, component: SiPrisma, name: 'Prisma' },
  { id: 8, component: BiLogoMongodb, name: 'MongoDB' },
];

const complementarios = [
  { id: 1, component: FaGitSquare, name: 'Git' },
  { id: 2, component: FaSquareGithub, name: 'GitHub' },
  { id: 3, component: SiVite, name: 'Vite' },
  { id: 4, component: SiVite, name: 'Vite' },
  { id: 5, component: FaJira, name: 'Jira' },
  { id: 6, component: FaBitbucket, name: 'Bitbucket' },
  { id: 7, component: FaFigma, name: 'Figma' },
  { id: 8, component: SiNetlify, name: 'Netlify' },
  { id: 9, component: SiRailway, name: 'Railway' },
  { id: 10, component: IoLogoVercel, name: 'Vercel' },
];

const Habilidades = () => {
  return (
    <section className='mt-10'>
      <h2 className='text-primary dark:text-primary-dark font-bold text-[30px] md:text-[34px] mb-4'>
        Habilidades
      </h2>

      <Accordion selectionMode='multiple' variant='splitted'>
        {/* Frontend */}
        <AccordionItem
          key='1'
          aria-label='Frontend'
          title='Frontend 🎨'
          className='mb-4 pb-4'
        >
          <div className='flex flex-wrap gap-3 w-full'>
            {frontend.map(({ id, component: IconComponent, name }) => (
              <div
                key={id}
                className='py-1 px-2 flex gap-1 items-center rounded-md bg-primary text-white'
              >
                <IconComponent className='w-4 h-4' />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </AccordionItem>

        {/* Backend */}
        <AccordionItem
          key='2'
          aria-label='Backend'
          title='Backend ⚙'
          className='mb-4 pb-4'
        >
          <div className='flex flex-wrap gap-3 w-full'>
            {backend.map(({ id, component: IconComponent, name }) => (
              <div
                key={id}
                className='py-1 px-2 flex gap-1 items-center rounded-md bg-primary text-white'
              >
                <IconComponent className='w-4 h-4' />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </AccordionItem>

        {/* Herramientas */}
        <AccordionItem
          key='3'
          aria-label='Complementarios'
          title='Complementarios 🛠'
          className='mb-4 pb-4'
        >
          <div className='flex flex-wrap gap-3 w-full'>
            {complementarios.map(({ id, component: IconComponent, name }) => (
              <div
                key={id}
                className='py-1 px-2 flex gap-1 items-center rounded-md bg-primary text-white'
              >
                <IconComponent className='w-4 h-4' />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Habilidades;
