import React, { useState, useEffect } from 'react';
import styles from '../css/contact.module.css'; // Importar los estilos como una variable 'styles'

const Contact = () => {

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isChecked) {
      // Ejemplo: enviar el formulario
      console.log('Formulario enviado correctamente.');
    } else {
      console.log('Debe aceptar los términos y condiciones para enviar el formulario.');
    }
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
      <div className="row">
      <div className="col-md-6 p-2">
          {/* Información de contacto y formulario */}
          <div className={styles['contact-form']}>
            <h2>Formulario de Contacto</h2>
            <form>
              <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="apellido">Apellido:</label>
                <input type="text" id="apellido" name="apellido" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="correo">Correo:</label>
                <input type="email" id="correo" name="correo" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="nacionalidad">Nacionalidad:</label>
                {isLoading ? (
                  <p>Cargando países...</p>
                ) : (
                  <select id="nacionalidad" name="nacionalidad" className="form-control">
                    <option value="">Selecciona un país</option>
                    {countryOptions}
                  </select>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="opciones">Opciones (Elige una):</label>
                <select id="opciones" name="opciones" className="form-control">
                  <option value="opcion1">Opción 1</option>
                  <option value="opcion2">Opción 2</option>
                  <option value="opcion3">Opción 3</option>
                  <option value="opcion4">Opción 4</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="secciones">Secciones (Elige una):</label>
                <select id="secciones" name="secciones" className="form-control">
                  <option value="seccion1">Sección 1</option>
                  <option value="seccion2">Sección 2</option>
                  <option value="seccion3">Sección 3</option>
                  <option value="seccion4">Sección 4</option>
                </select>
              </div>
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
              <button type="submit" className="btn btn-primary mt-2" disabled={!isFormValid}>Enviar</button>
            </form>
          </div>
        </div>
        <div className="col-md-6 p-2">
          {/* Información del profesional */}
          <div className={styles['contact-info']}>
            <h2>Información de Contacto</h2>
            <p>Dirección: [Dirección]</p>
            <p>Teléfono: [Teléfono]</p>
            <p>Email: [Email]</p>
            {/* Puedes agregar más información de contacto según sea necesario */}
          </div>
          <div className={`${styles['professional-profile']} text-center`}>
            <img
              src="URL_DE_LA_IMAGEN"
              alt="Foto del profesional"
              className="profile-picture rounded-circle img-fluid"
            />
            <h3>Nombre Apellido</h3>
            <p>Cargo</p>
            <p>Descripción breve del profesional.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
