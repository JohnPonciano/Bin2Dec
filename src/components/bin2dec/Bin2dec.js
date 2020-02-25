import React, { Component } from 'react';


// import { Container } from './styles';

export default class Bin2dec extends Component {


state = {
    binary_value:[],

    decimal_value: 0,

}

converting = this.converting.bind(this)

converting(){

  //console.log("this.state")
 const reversedBinaryText = this.binary_value
      .split('')
      .map(Number) // Convert to a number from string
      .reverse()
  
  const result = reversedBinaryText.reduce(
      (accumulator, currentValue, idx) =>
        accumulator + currentValue * Math.pow(2, idx)
    )

    this.setState({decimal_value:result})
}

  render() {
    return (
        <div className='conversor-bin2dec'>
                <h1> Bin2Dec</h1>

                <h2> {this.props.binary} to {this.props.decimal} </h2>

                <input type="text"  onChange={(event)=>{this.setState({binary_value:event.target.value})}}/>
                
                <input type="button" value="Convert" onClick={this.converting}/> 
                
  <h2>{this.state.decimal_value}</h2>

        </div>
    )
  }
}
