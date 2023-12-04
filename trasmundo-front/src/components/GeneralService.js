import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas, faGraduationCap, faPlane, faHandshake } from '@fortawesome/free-solid-svg-icons';

const GeneralService = () => {
  const handleServiceClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const services = [
    { icon: faGraduationCap,
      title: 'Visas de Estudio',
      id: 'visa-estudios' },

    { icon: faEarthAmericas, 
      title: 'Cursos de inglés', 
      id: 'curso-ingles' },

    { icon: faPlane, 
      title: 'Plan de Vacaciones', 
      id: 'plan-vacaciones' },

    { icon: faHandshake, 
      title: 'Asesoría Migratoria', 
      id: 'asesoria' },
  ];

  const titleStyle = {
    color: '#393459', // Nuevo color de texto
  };

  return (
    <div className="text-center p-4">
      <div className="general-service">
        <h2 style={{ backgroundColor: '#94E1F2', borderRadius: '10px', padding: '5px', color: 'white' }}>Nuestros servicios</h2>
        <p>Te apoyamos con el primer paso para obtener una de las siguientes Visas</p>
        <div className="service-list">
          {services.map((service, index) => (
            <div key={index} className="service-item" onClick={() => handleServiceClick(service.id)}>
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