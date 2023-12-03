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
    <div className={styles.container}>
          <form onSubmit={handleFormSubmit}>
            <input type="text" name="nombre" onChange={handleInputChange} value={formData.nombre || ''} placeholder="Nombre" />
            <input type="text" name="apellido" onChange={handleInputChange} value={formData.apellido || ''} placeholder="Apellido" />
            <input type="email" name="correo" onChange={handleInputChange} value={formData.correo || ''} placeholder="Correo" />
            <select name="nacionalidad" onChange={handleInputChange} value={formData.nacionalidad}>
              <option value="">Selecciona una nacionalidad</option>
              {countryOptions}
            </select>
            <input type="text" name="opciones" onChange={handleInputChange} value={formData.opciones || ''} placeholder="Opciones" />
            <input type="text" name="secciones" onChange={handleInputChange} value={formData.secciones || ''} placeholder="Secciones" />
            <input type="date" name="fechaNacimiento" onChange={handleInputChange} value={formData.fechaNacimiento || ''} />
            {/* ... Otros campos de formulario ... */}
            <div className="form-check mt-3">
              <input
                type="checkbox"
                id="terminos"
                name="terminos"
                className="form-check-input"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="terminos" className="form-check-label">
                Acepto los términos y condiciones
              </label>
            </div>
            <button type="submit" disabled={!isFormValid}>
              Enviar
            </button>
          </form>
        </div>
      );
    };

export default Contact;
