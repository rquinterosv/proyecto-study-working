import React from 'react';

const ConfirmationMessage = ({ show }) => {
  return (
    <div style={{ display: show ? 'block' : 'none' }}>
      <h2>¡Formulario enviado con éxito!</h2>
      <p>Gracias por contactarnos. Recibimos tu solicitud correctamente.</p>
    </div>
  );
};

export default ConfirmationMessage;
