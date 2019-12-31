import React, { Component } from 'react';
import { connect } from 'react-redux';
import {onAgeUp, onAgeDown} from '../Actions/Ageupdownaction';

class Ageupdown extends Component {
render() {
return (
<div>
    <div>My age: <span>{this.props.age}</span></div>
    <button onClick={()=>this.props.onAgeUp(this.props.b)}>Age UP</button>
    <button onClick={this.props.onAgeDown}>Age Down</button>
</div>
);
}
}


const mapStateToProps = (state) => {
   
const { age,}=state.Ageupdownreducer;
return {age};
};


export default connect(mapStateToProps,{onAgeUp,onAgeDown})(Ageupdown);