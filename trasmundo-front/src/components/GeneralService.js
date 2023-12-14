import React from 'react';
import VisaEstudios from '../img/graduation-hat.png';
import CursoIngles from '../img/eng.png';
import PlanVacaciones from '../img/honeymoon.png';
import Asesoria from '../img/support.png';

const GeneralService = () => {
  const services = [
    { image: VisaEstudios, title: 'Visas de Estudio', id: 'visa-estudios' },
    { image: CursoIngles, title: 'Cursos de inglés', id: 'curso-ingles' },
    { image: PlanVacaciones, title: 'Plan de Vacaciones', id: 'plan-vacaciones' },
    { image: Asesoria, title: 'Asesoría Migratoria', id: 'asesoria' },
  ];

  const titleStyle = {
    color: '#393459',
  };

  const handleServiceClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const container = document.querySelector('.service-list');
      if (container) {
        container.scrollTop = element.offsetTop - container.offsetTop;
      }
    }
  };

  return (
    <div className="text-center p-4">
      <div className="general-service">
        <h2 style={{ backgroundColor: '#94E1F2', borderRadius: '10px', padding: '5px', color: 'white' }}>Nuestros servicios</h2>
        <p>Te apoyamos con el primer paso para obtener una de las siguientes Visas</p>
        <div className="service-list">
          {services.map((service, index) => (
            <div key={index} id={service.id} className="service-item" onClick={() => handleServiceClick(service.id)}>
              <img src={service.image} alt={service.title} style={{ width: '100px', height: '100px' }} />
              <h4 style={titleStyle}>{service.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneralService;
