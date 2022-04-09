import React, { Component } from 'react'
import { Card } from '../../components';
import { products } from '../../constants';

import "./Work.scss";

class Work extends Component {
  render() {
    return (
      <div class="work" id="work">
        <div class="w-header">
            <h1 class="w-title">Recent Projects</h1>
            <p class="w-description">
            Here are some cool projects that I made using some latest frameworks. 
            Loved building these projects and learned a lot of things on the way. 
            My projects are based on frontend design and backend development using Nodejs and React. 
            Also worked on web scraping using Python.
            </p>
        </div>
        <div className="w-list">
          {products.map((item) =>(
            <Card key={item.id} img={item.img} link={item.link}/>
          ))}
        </div>
      </div>
    )
  }
}

export default Work;