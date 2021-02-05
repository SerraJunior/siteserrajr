import React from 'react';

import './style.css'
 
function SimpleMap() {
 
    return (
      <div className="map">
       <iframe className='mapFrame' title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.783882903157!2d-42.54428284892711!3d-22.286175021551774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x978a85e8cc82f3%3A0xc2954654bfcf2b7e!2sSerra%20Jr.%20Engenharia!5e0!3m2!1spt-BR!2sbr!4v1612490677442!5m2!1spt-BR!2sbr" frameborder="0"   ></iframe>
      </div>
    )
}
 
export default SimpleMap;