import React, { Component } from 'react'; 
import Band from '../components/Band'; 
import { connect } from 'react-redux' 

 class Bands extends Component{
    
    makeBandComponenets = () =>{
        debugger 
       return this.props.bands.map((band,i) => <ul><Band delete={()=>this.props.delete_band(band.id)} key={i} band={band}/ ></ul>)
    }
    render(){
        return(<div>
            {this.makeBandComponenets()}
        </div>

        )
    }
}  
const mdtp = d =>{
    return {
        delete_band: id => d({ type: "DELETE_BAND", id })

} 
} 
const mstp = s =>{
    return{s}
}
export default connect(mstp, mdtp)(Bands)