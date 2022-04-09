import React, { Component } from 'react'
import "./Card.scss";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-browser">
          <div className="card-circle"></div>
          <div className="card-circle"></div>
          <div className="card-circle"></div>
        </div>
        <a href={this.props.link}>
          <img src={this.props.img} alt="card img" className="card-img" />
        </a>
      </div>
    )
  }
}

export default Card;