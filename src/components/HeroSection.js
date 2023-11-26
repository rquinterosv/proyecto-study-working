import React from 'react';

export default function HeroSection() {
  return (
    <header style={{ paddingLeft: 0, backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 400, backgroundSize: 'cover', width: '100%', }}>
      <div className='p-5 text-center'>
        <div className='mask p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Estudia y trabaja en el extranjero</h1>
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
