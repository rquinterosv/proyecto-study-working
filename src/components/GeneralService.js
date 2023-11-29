import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas, faGraduationCap, faPlane, faHandshake } from '@fortawesome/free-solid-svg-icons';

const GeneralService = () => {
  const services = [
    { icon: faEarthAmericas, title: 'Cursos de inglés'},
    { icon: faGraduationCap, title: 'Visas de Estudio' },
    { icon: faPlane, title: 'Plan de Vacaciones' },
    { icon: faHandshake, title: 'Asesoría Migratoria' },
  ];

  return (
    <div className="text-center p-4"> {/* Clase Bootstrap para centrar */}
      <div className="general-service">
        <p>Te apoyamos con el primer paso</p>
        <h2>Nuestros servicios</h2>
        <div className="service-list">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <FontAwesomeIcon icon={service.icon} size="3x" />
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneralService;
