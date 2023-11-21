import React from 'react';

export default function HeroSection() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 400 }}
      >
        <div className='mask p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Comienza tu experiencia en Canadá</h1>
              <h5 className='mb-3'>Te apoyamos con procesos, documentación e información para tu nueva vida</h5>
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