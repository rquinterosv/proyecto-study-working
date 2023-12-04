import React, { useState, useEffect } from 'react';
import styles from '../css/contact.module.css'; 

const Contact = () => {

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    nacionalidad: '',
    opciones: '',
    secciones: '',
    fechaNacimiento: '',
  });

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Formulario enviado correctamente');
      } else {
        console.error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value !== undefined ? value : '',
    });
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error('Failed to fetch countries');
        }
        const data = await response.json();
        const countriesList = data.map((country) => country.name.common);
        setCountries(countriesList);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const countryOptions = countries.map((country, index) => (
    <option key={index} value={country}>
      {country}
    </option>
  ));

  useEffect(() => {
    setIsFormValid(isChecked);
  }, [isChecked]);


  return (
    <div className={`${styles.container} container-fluid`}>
      <div className="row">
        <div className="col-lg-6">
          <form onSubmit={handleFormSubmit} className={`${styles.form} p-4`}>
            <div className="mb-3">
              <input type="text" name="nombre" onChange={handleInputChange} value={formData.nombre || ''} className="form-control" placeholder="Nombre" />
            </div>
            <div className="mb-3">
              <input type="text" name="apellido" onChange={handleInputChange} value={formData.apellido || ''} className="form-control" placeholder="Apellido" />
            </div>
            <div className="mb-3">
              <input type="email" name="correo" onChange={handleInputChange} value={formData.correo || ''} className="form-control" placeholder="Correo" />
            </div>
            <div className="mb-3">
              <input type="date" name="fechaNacimiento" onChange={handleInputChange} className="form-control" value={formData.fechaNacimiento || ''} />
            </div>
            <div className="mb-3">
            <select name="nacionalidad" onChange={handleInputChange} value={formData.nacionalidad} className={`form-control ${styles.select}`}>
              <option value="">Selecciona una nacionalidad</option>
              {countryOptions}
            </select>
            </div>
            <div className="mb-3">
              <input type="text" name="opciones" onChange={handleInputChange} value={formData.opciones || ''} placeholder="Opciones" />
            </div>
            <div className="mb-3">
              <input type="text" name="secciones" onChange={handleInputChange} value={formData.secciones || ''} placeholder="Secciones" />
            </div>
            
            {/* Resto de los campos de formulario */}
            <div className="mb-3 form-check">
              <input type="checkbox" id="terminos" name="terminos" className="form-check-input" checked={isChecked} onChange={handleCheckboxChange} />
              <label htmlFor="terminos" className="form-check-label">
                Acepto los términos y condiciones
              </label>
            </div>
            <button type="submit" className="btn btn-primary" disabled={!isFormValid}>
              Enviar
            </button>
          </form>
        </div>
        <div className="col-lg-6 d-lg-flex justify-content-center align-items-center">
          <div className={`${styles.info} text-center`}>
            <h3>Información Adicional</h3>
            {/* Información adicional */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
