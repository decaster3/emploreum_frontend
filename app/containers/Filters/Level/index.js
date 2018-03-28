/**
 *
 * VacanciesSearch
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import { selectLevel } from './selectors';
import reducer from './reducer';
import { clearReducer, changeLevel, getLevelFromUrl } from './actions';

import LevelSelector from '../../../components/Filters/LevelFilter/LevelSelector/Loadable';
import LevelWrapper from '../../../components/Filters/LevelFilter/FilterWrapper/Loadable';

export class Keywords extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getLevelFromUrl();
  }
  componentWillUnmount() {
    this.props.clearReducer();
  }

  render() {
    return (
      <LevelWrapper classes={this.props.classes}>
        <LevelSelector initialLevel={this.props.selectedLevel} changeLevel={this.props.changeLevel} />
      </LevelWrapper>
    );
  }
}

Keywords.propTypes = {
  clearReducer: PropTypes.func,
  getLevelFromUrl: PropTypes.func,
  changeLevel: PropTypes.func,
  selectedLevel: PropTypes.array,
  classes: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    selectedLevel: selectLevel(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearReducer: () => dispatch(clearReducer()),
    getLevelFromUrl: () => dispatch(getLevelFromUrl()),
    changeLevel: (evt) => dispatch(changeLevel(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'levelFilter', reducer });

export default compose(
  withReducer,
  withConnect,
)(Keywords);
