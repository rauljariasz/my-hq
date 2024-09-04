import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import mcpplatform from '/Proyectos/mcpplatform.png';
import shortly from '/Proyectos/shortly.png';
import { Link } from 'react-router-dom';

const proyectosArr = [
  {
    title: 'MCP Platform',
    img: mcpplatform,
    descripcion:
      'Una plataforma de cursos online, proyecto realizado con la intención de demostrar mis habilidades de Full Stack, donde desarrolle el front con ReactJS, Vite, Tailwind, el backend con ExpressJS, para la base de datos PostgreSQL y de ORM se utilizó Prisma.',
    codeUrl: 'https://github.com/rauljariasz/mcp-server',
    liveUrl: 'https://rauljariasz.github.io/mcp-client/#/',
  },
  {
    title: `Shortly acortador de URL's`,
    img: shortly,
    descripcion: `Landing page para acortar url's, se utiliza una API externa la cual hace el trabajo de acortar la url ingresada, y esta se guarda en el local storage. Proyecto realizado con ReactJS y para los estilos TailwindCSS`,
    codeUrl: 'https://github.com/rauljariasz/url-shortening-api',
    liveUrl: 'https://rauljariasz.github.io/url-shortening-api/',
  },
];

const Proyectos = () => {
  return (
    <section className='mt-10'>
      <h2 className='text-primary dark:text-primary-dark font-bold text-[30px] md:text-[34px] mb-4'>
        Proyectos Personales
      </h2>

      <div className='flex gap-4 justify-between flex-wrap flex-col md:flex-row md:gap-y-10'>
        {proyectosArr.map((item, index) => (
          <CardContainer key={index} className='inter-var max-w-max'>
            <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-secondary dark:border-primary/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  md:max-w-[400px]'>
              <CardItem
                translateZ='50'
                className='text-xl font-bold text-primary dark:text-primary-dark'
              >
                {item.title}
              </CardItem>
              <CardItem translateZ='100' className='w-full mt-4'>
                <img
                  src={item.img}
                  className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                  alt='thumbnail'
                />
              </CardItem>
              <CardItem as='p' translateZ='60' className='dark:text-white mt-3'>
                {item.descripcion}
              </CardItem>
              <div className='flex justify-between items-center mt-7'>
                <CardItem
                  translateZ={20}
                  href={item.codeUrl}
                  as='div'
                  className='px-4 py-2 rounded-xl text-xs font-normal dark:text-white'
                >
                  <Link to={item.codeUrl} target='_blank'>
                    Ver código →
                  </Link>
                </CardItem>
                <CardItem translateZ={20} as='div'>
                  <Link
                    target='_blank'
                    className='px-4 py-2 rounded-xl bg-primary dark:bg-white dark:text-black text-white text-xs font-bold'
                    to={item?.liveUrl}
                  >
                    Ver sitio
                  </Link>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
