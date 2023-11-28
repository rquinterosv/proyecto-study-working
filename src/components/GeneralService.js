import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faCode, faCog, faChartBar } from '@fortawesome/free-solid-svg-icons';

const GeneralService = () => {
  const services = [
    { icon: faDesktop, title: 'Diseño web' },
    { icon: faCode, title: 'Desarrollo web' },
    { icon: faCog, title: 'Configuración' },
    { icon: faChartBar, title: 'Analítica' },
  ];

  return (
    <div className="text-center p-4"> {/* Clase Bootstrap para centrar */}
      <div className="general-service">
        <h2>Our Services</h2>
        <p>Explore the various services we offer</p>

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
