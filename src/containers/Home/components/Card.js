import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css/animate.min.css';
import './Card.less';

// install some dependencies
// npm install react-fontawesome font-awesome animate.css

export default class Card extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    image: PropTypes.string,
    time: PropTypes.string,
    title: PropTypes.string,
    animate: PropTypes.string,
  }
  state = {
    hasAddClass: false
  };
  onClickButton = () => {
    this.setState({
      hasAddClass: true
    });
    setTimeout(() => {
      this.setState({
        hasAddClass: false
      });
    }, 1000);
  }
  render() {
    return (
      <div className={`card animated ${this.state.hasAddClass ? this.props.animate : ''}`}>
        <div className="cardHeader">
          <img className="avatar" src={this.props.avatar} alt="userAvatar" />
          <div className="userInfo">
            <div className="name">
              {this.props.name}
              <span> shared</span>
            </div>
            <div className="time">
              {this.props.time} minutes ago
            </div>
          </div>
          <button onClick={this.onClickButton}>Click me</button>
        </div>
        <h2>{this.props.title}</h2>
        <img className="cardImg" src={this.props.image} alt="titleimagte" />
        <div className="footer">
          <FontAwesome name="commenting-o" />
          <FontAwesome name="thumbs-o-up" />
          <FontAwesome name="thumbs-o-down" />
          <FontAwesome name="star-o" />
        </div>
      </div>
    );
  }
}
