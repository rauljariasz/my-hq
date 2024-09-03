import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { MdWorkOutline } from 'react-icons/md';
import 'react-vertical-timeline-component/style.min.css';

const exp = [
  {
    empresa: 'Tribal World Wide Guatemala.',
    cargo: 'Frontend Developer Freelance',
    resumen:
      'Desarrollo y definición de la estructura del frontend de una web/app e-commerce, para un cliente de alto perfil de la empresa. Integración eficiente de los servicios del cliente. Integración de WebSDK SoulMachines para un Barista Digital. ++',
    // 2000 - 2003 || 2000 - presente
    fecha: '2023 - presente',
  },
];

const ExperienciaLaboral = () => {
  const html = document.querySelector('html');

  const backgroundContent = html?.classList?.contains('dark')
    ? '#141D23'
    : '#6694b3';

  return (
    <section>
      <h2 className='text-primary dark:text-primary-dark font-bold text-[30px] md:text-[34px] mb-4'>
        Experiencia Laboral
      </h2>
      <VerticalTimeline
        animate={false}
        layout='1-column-left'
        className='translate-x-[-20px] lg:translate-x-0'
      >
        {exp.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className='vertical-timeline-element--work'
            contentStyle={{ background: backgroundContent, color: '#fff' }}
            contentArrowStyle={{
              borderRight: `7px solid  ${backgroundContent}`,
            }}
            date={item.fecha}
            iconStyle={{ background: backgroundContent, color: '#fff' }}
            icon={<MdWorkOutline />}
          >
            <h3 className='vertical-timeline-element-title text-[18px]'>
              {item.empresa}
            </h3>
            <h4 className='vertical-timeline-element-subtitle font-semibold'>
              {item.cargo}
            </h4>
            <p>{item.resumen}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default ExperienciaLaboral;
