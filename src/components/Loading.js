import React, { Component } from 'react'
import loading from './loading.gif';

export class Loading extends Component {
  render() {
    return (
      <div className="grid justify-items-center">
        <img src={loading} alt="Loading..."/>
      </div>
    )
  }
}

export default Loading