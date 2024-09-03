import Slider from 'react-infinite-logo-slider';
import {
  FaNode,
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaGitSquare,
} from 'react-icons/fa';
import {
  SiExpress,
  SiMysql,
  SiNextdotjs,
  SiPrisma,
  SiVite,
} from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiTailwindCssFill } from 'react-icons/ri';
import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi';
import { FaSquareGithub } from 'react-icons/fa6';

const icons = [
  { id: 1, component: FaNode, name: 'Node.js' },
  { id: 2, component: FaReact, name: 'React' },
  { id: 3, component: SiExpress, name: 'Express' },
  { id: 4, component: IoLogoJavascript, name: 'JavaScript' },
  { id: 5, component: FaCss3Alt, name: 'CSS3' },
  { id: 6, component: RiTailwindCssFill, name: 'Tailwind CSS' },
  { id: 7, component: FaHtml5, name: 'HTML5' },
  { id: 8, component: BiLogoPostgresql, name: 'PostgreSQL' },
  { id: 9, component: SiMysql, name: 'MySQL' },
  { id: 10, component: FaGitSquare, name: 'Git' },
  { id: 11, component: FaSquareGithub, name: 'GitHub' },
  { id: 12, component: SiNextdotjs, name: 'Next.js' },
  { id: 13, component: BiLogoTypescript, name: 'TypeScript' },
  { id: 14, component: SiPrisma, name: 'Prisma' },
  { id: 15, component: SiVite, name: 'Vite' },
];

const LogoSlider = () => {
  return (
    <Slider width='180px' duration={60} pauseOnHover={true} blurBorders={false}>
      {icons.map(({ id, component: IconComponent }) => (
        <Slider.Slide key={id}>
          <IconComponent
            size={100}
            className='dark:text-primary-dark text-white'
          />
        </Slider.Slide>
      ))}
    </Slider>
  );
};

export default LogoSlider;
