import React from 'react';
import Band from './Band'

const Bands = ({ bands, deleteBand }) => {
  return (
    <div>
      {bands.map(band => <Band key={band.id} band={band} delete={deleteBand} />)}
    </div>
  );
}

export default Bands;