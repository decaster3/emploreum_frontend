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
    this.state = {
      isStartRender: false,
      clicked: false,
    };
  }
  componentDidMount() {
    if (this.props.handleonClick) {
      this.props.handleonClick();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.loading && !nextProps.loading && this.state.clicked) {
      this.replaceUrl();
    }
  }
  replaceUrl() {
    const { replace, to } = this.props;
    if (replace) {
      this.context.router.replace(to);
    } else {
      this.context.router.history.push(to);
    }
  }
  handleClick = (evt) => {
    evt.preventDefault();
    this.setState({ isStartRender: true });
    if (!this.props.loading) {
      this.replaceUrl();
    } else {
      this.setState({ clicked: true });
    }
  };

  render() {
    return (
      <Link onClick={this.handleClick} {...this.props}>
        {this.props.children}
        {
          this.state.isStartRender
          ? (<div style={{ display: 'none' }}>{this.props.placeholder}</div>)
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
  loading: PropTypes.bool,
  placeholder: PropTypes.func,
  handleonClick: PropTypes.func,
};

export default AsyncLink;
