import React from 'react';
import '../App.css';
import heroimg from '../img/Hero.png';

export default function HeroSection() {
  return (
    <header
      style={{
        paddingLeft: 0,
        backgroundImage: `url(${heroimg})`,
        height: 400,
        minHeight: 200,
        backgroundSize: 'cover', // Adjust the value here
        backgroundRepeat: 'no-repeat', // Ensure the image doesn't repeat
        backgroundPosition: 'center', // Center the image
        width: '100%',
      }}
    >
      <div className='p-5 text-center'>
        <div className='mask p-3' style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            borderRadius: '15px',   
            }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div>
              <h1 className='mb-3'>Migra al extranjero</h1>
              <h5 className='mb-3'>Te apoyamos con el proceso para comenzar tu nueva vida</h5>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Agenda una reunión
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
