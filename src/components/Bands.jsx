import React from 'react';
import Band from './Band'

const Bands = ({ bands, deleteBand }) => {
     const renderBands = bands.map(band => {
          debugger
          return <Band name={band.name} key={band.id} deleteBand={deleteBand} band={band} />
     })
     return ( 
          <ul>
               { renderBands }
          </ul>
     );
}

export default Bands;