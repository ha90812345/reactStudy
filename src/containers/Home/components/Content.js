import React, { Component } from 'react';
import Card from './Card.js';
import Tester01 from './Tester01.js';
import InsertCardDiv from './InsertCardDiv.js';

export default class Content extends Component {
  render() {
    return (
      <div className="content">
        <h1>Hello, We are ReactMaker!</h1>
        <h2>This is Content Component!</h2>
        <InsertCardDiv
          value="WTF"
        />
        <Card
          name="Hyman"
          time="10"
          avatar="https://unsplash.it/50/50?image=1012"
          image="https://unsplash.it/400/300?image=1060"
          title="Home to unique ideas from the world’s smart minds."
          animate="shake"
        />
        <Card
          name="Andy"
          time="35"
          avatar="https://unsplash.it/50/50?image=1033"
          image="https://unsplash.it/400/300?image=888"
          title="To be or not to be..."
          animate="jello"
        />
      </div>
    );
  }
}
