/**
 *
 * TestCreation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import { selectSubmitTestCreationButtonState } from './selectors';
import reducer from './reducer';
import SpecificationsSkills from './SpecificationSkills/Loadable';
import MainTestCreation from '../../../../components/Company/TestCreation/Loadable';
import { createTest, clearReducer } from './actions';
export class TestCreation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillUnmount() {
    this.props.clearReducer();
  }
  renderSpecificationSkills() {
    return <SpecificationsSkills />;
  }
  render() {
    const specificationSkills = this.renderSpecificationSkills();
    return (
      <div>
        <MainTestCreation
          specificationSkills={specificationSkills}
          submittingTestCreationButtonState={this.props.submittingTestCreationButtonState}
          createTest={this.props.createTest}
        />
      </div>
    );
  }
}

TestCreation.propTypes = {
  submittingTestCreationButtonState: PropTypes.bool,
  createTest: PropTypes.func,
  clearReducer: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    submittingTestCreationButtonState: selectSubmitTestCreationButtonState(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createTest: (evt) => dispatch(createTest(evt)),
    clearReducer: () => dispatch(clearReducer()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'testCreation', reducer });

export default compose(
  withReducer,
  withConnect,
)(TestCreation);
