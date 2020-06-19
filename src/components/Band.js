import React from 'react';

const Band = ({ band, deleteBand }) => {

  const handleBandDeletion = () => {
    deleteBand(band.id)
  }

  return ( 
    <React.Fragment>
      <li>{ band.name } <span><button onClick={handleBandDeletion}>Delete</button></span></li>
    </React.Fragment>
  );
}

export default Band;
