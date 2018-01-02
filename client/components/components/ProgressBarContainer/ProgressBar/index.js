import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class ProgressBar extends Component {
  static propTypes = {
    speed: PropTypes.number.isRequired,
    hasQuestionAnswered: PropTypes.bool.isRequired,
    onSetScore: PropTypes.func.isRequired,
    onSetUserAnswer: PropTypes.func.isRequired
  };

  state = {
    value: 100
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.changeValue();
    }, this.props.speed);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.hasQuestionAnswered) {
      this.props.onSetScore(Math.round(this.state.value * 1.5));
      clearInterval(this.interval);
    }
  }

  componentWillUpdate(newProps, newState) {
    const { hasQuestionAnswered } = this.props;
    if (newState.value === 0) {
      clearInterval(this.interval);

      if (!hasQuestionAnswered) {
        this.props.onSetUserAnswer(undefined);
      }
    }

    if (hasQuestionAnswered) {
      this.resetValue();
      this.interval = setInterval(() => {
        this.changeValue();
      }, this.props.speed);
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
      <div className="ProgressBar">
        <progress className={classNames} value={value} max="100">
          {`${value}%`}
        </progress>
      </div>
    );
  }
}

export default ProgressBar;
