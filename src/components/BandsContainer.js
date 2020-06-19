import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands'
import { addBand, deleteBand } from '../actions/bandActions'

import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands} deleteBand={this.props.deleteBand} />
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch(addBand(name)),
  deleteBand: id => dispatch(deleteBand(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)