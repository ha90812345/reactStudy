import React from 'react';
import PropTypes from 'prop-types';

export default class InsertCardBtn extends React.Component {
  static propTypes = {
    textX: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  onClickButton = () => {
    const AAA = this.props.textX;
    alert(AAA);
  }
  render() {
    return (
      <button onClick={this.onClickButton}>{this.props.textX}發表文章</button>
    );
  }
}
