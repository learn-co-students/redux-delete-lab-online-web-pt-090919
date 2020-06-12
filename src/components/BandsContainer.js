  
import React, { Component } from 'react';
import BandInput from './BandInput';
import Band from './Band.js';
import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.props.bands.map((b) => (
          <Band deleteBand={this.props.deleteBand} key={b.id} band={b} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ bands }) => ({ bands });

const mapDispatchToProps = (dispatch) => ({
  addBand: (name) => dispatch({ type: 'ADD_BAND', name }),
  deleteBand: (id) => dispatch({ type: 'DELETE_BAND', id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);