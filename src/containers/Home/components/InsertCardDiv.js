import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import InsertCardBtn from './InsertCardBtn.js';

export default class InsertCardDiv extends React.Component {
  static propTypes = {
    textX: PropTypes.string,
    value: PropTypes.string
  }
  // onClickButton = () => {
  //   const AAA = this.props.textX;
  //   alert(AAA);
  // }
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      // <button onClick={this.onClickButton}>{this.props.textX}發表文章</button>
      <div>123
      <label htmlFor="wait" >
        {this.state.value}
      </label>
        <br/>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <InsertCardBtn
          textX={this.state.value}
        />
      </div>
    );
  }
}
