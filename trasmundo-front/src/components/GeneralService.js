import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas, faGraduationCap, faPlane, faHandshake } from '@fortawesome/free-solid-svg-icons';

const GeneralService = () => {
  const services = [
    { icon: faEarthAmericas, title: 'Cursos de inglés' },
    { icon: faGraduationCap, title: 'Visas de Estudio' },
    { icon: faPlane, title: 'Plan de Vacaciones' },
    { icon: faHandshake, title: 'Asesoría Migratoria' },
  ];

  const titleStyle = {
    color: '#393459', // Nuevo color de texto
  };

  return (
    <div className="text-center p-4">
      <div className="general-service">
        <p>Te apoyamos con el primer paso</p>
        <h2 style={{ backgroundColor: '#94E1F2', borderRadius: '10px', padding: '5px', color: 'white' }}>Nuestros servicios</h2>
        <div className="service-list">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <FontAwesomeIcon icon={service.icon} size="3x" />
              <h4 style={titleStyle}>{service.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneralService;