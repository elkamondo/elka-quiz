import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class ProgressBar extends Component {
  constructor() {
    super();
    this.state = {
      value: 100
    };
  }

  componentDidMount() {
    const { speed } = this.props;
    this.interval = setInterval(() => {
      this.changeValue();
    }, speed);
  }

  componentWillReceiveProps(newProps) {
    const { onSetScore } = this.props;
    const { value } = this.state;
    if (newProps.hasQuestionAnswered) {
      onSetScore(Math.round(value * 1.5));
      clearInterval(this.interval);
    }
  }

  componentWillUpdate(newProps, newState) {
    const { speed, hasQuestionAnswered, onSetUserAnswer } = this.props;
    if (newState.value === 0) {
      clearInterval(this.interval);

      if (!hasQuestionAnswered) {
        onSetUserAnswer(undefined);
      }
    }

    if (hasQuestionAnswered) {
      this.resetValue();
      this.interval = setInterval(() => {
        this.changeValue();
      }, speed);
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
    const classNames = classnames({
      progress: true,
      'is-success': value >= 75,
      'is-primary': value >= 50 && value < 75,
      'is-warning': value >= 25 && value < 50,
      'is-danger': value < 25
    });

    return (
      <div className="c-progressbar">
        <progress className={classNames} value={value} max="100">
          {`${value}%`}
        </progress>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  speed: PropTypes.number.isRequired,
  hasQuestionAnswered: PropTypes.bool.isRequired,
  onSetScore: PropTypes.func.isRequired,
  onSetUserAnswer: PropTypes.func.isRequired
};

export default ProgressBar;
