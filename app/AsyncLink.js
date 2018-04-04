import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';

class AsyncLink extends Component {
  static contextTypes = {
    router: PropTypes.shape({
      replace: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired,
    }).isRequired,
  }

  constructor() {
    super();
    this.state = { loading: false };
  }
  componentWillUnmount() {
    this.props.handleonClick();
  }
  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  handleClick = (evt) => {
    evt.preventDefault();
    this.setState({ loading: true });
    this.sleep(500).then(() => {
      this.setState({ loading: false });
      const { replace, to } = this.props;
      if (replace) {
        this.context.router.replace(to);
      } else {
        this.context.router.history.push(to);
      }
    });
  };

  render() {
    const Placeholder = this.props.placeholder;
    return (
      <Link onClick={this.handleClick} {...this.props}>
        {this.props.children}
        {
          this.state.loading
          ? (<div style={{ display: 'none' }}><Placeholder /></div>)
          : <div />
        }
      </Link>
    );
  }
}

AsyncLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  // onPreload: PropTypes.func,
  replace: PropTypes.object,
  to: PropTypes.func,
  placeholder: PropTypes.func,
  handleonClick: PropTypes.func,
};

export default AsyncLink;
