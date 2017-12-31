import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const stateToProps = ({ game }) => ({
  hasQuestionAnswered: game.hasQuestionAnswered
});

class ProgressBar extends Component {
  static propTypes = {
    hasQuestionAnswered: PropTypes.bool.isRequired,
    onSetScore: PropTypes.func.isRequired
  };

  state = {
    value: 100
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.changeValue();
    }, 200);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.hasQuestionAnswered) {
      console.log(Math.round(this.state.value * 1.5));
      this.props.onSetScore(Math.round(this.state.value * 1.5));
      clearInterval(this.interval);
    }
  }

  componentWillUpdate(newProps, newState) {
    if (newState.value === 0) {
      clearInterval(this.interval);
    }

    if (this.props.hasQuestionAnswered) {
      this.resetValue();
      this.interval = setInterval(() => {
        this.changeValue();
      }, 200);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeValue() {
    this.setState(prevState => ({
      value: prevState.value - 5
    }));
  }

  resetValue() {
    this.setState({ value: 100 });
  }

  render() {
    const { value } = this.state;
    return (
      <div className="ProgressBar">
        <progress className="progress" value={value} max="100">
          {`${value}%`}
        </progress>
      </div>
    );
  }
}

export default connect(stateToProps)(ProgressBar);
