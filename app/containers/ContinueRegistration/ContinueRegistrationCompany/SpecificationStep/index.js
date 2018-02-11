/**
 *
 * Registration
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import reducer from '../../../Specifications/reducer';

import {
  selectSpecificationList,
  selectSpecificationListStatus,
  selectChoosenSpecifications,
  selectSubmitSpecificationButtonState,
} from '.././selectors';

import SpecificationSkillsStep from '../../../../components/Specifications/Loadable';
import {
  getSpecification,
  addSpecificationWithSkills,
  deleteSpecificationFromChoosen,
} from '../../../Specifications/actions';

import { submitSpecificationSkillsStep } from '../actions';

export class SpecificationStep extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SpecificationSkillsStep
        getSpecification={this.props.getSpecification}
        specificationListStatus={this.props.specificationListStatus}
        specificationList={this.props.specificationList}
        addSpecificationWithSkills={this.props.addSpecificationWithSkills}
        choosenSpecifications={this.props.choosenSpecifications}
        deleteSpecificationFromChoosen={this.props.deleteSpecificationFromChoosen}
        submitSpecificationSkillsStep={this.props.submitSpecificationSkillsStep}
        submittingSpecification={this.props.submittingSpecification}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    choosenSpecifications: selectChoosenSpecifications(state),
    specificationList: selectSpecificationList(state),
    specificationListStatus: selectSpecificationListStatus(state),
    submittingSpecification: selectSubmitSpecificationButtonState(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitSpecificationSkillsStep: () => dispatch(submitSpecificationSkillsStep()),
    getSpecification: () => dispatch(getSpecification()),
    addSpecificationWithSkills: (evt) => dispatch(addSpecificationWithSkills(evt)),
    deleteSpecificationFromChoosen: (evt) => dispatch(deleteSpecificationFromChoosen(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer(
  { key: 'specificationSkillsCompanyRegistration', reducer },
);


SpecificationStep.propTypes = {
  getSpecification: PropTypes.func,
  specificationListStatus: PropTypes.string,
  specificationList: PropTypes.object,
  deleteSpecificationFromChoosen: PropTypes.func,
  addSpecificationWithSkills: PropTypes.func,
  submitSpecificationSkillsStep: PropTypes.func,
  choosenSpecifications: PropTypes.object,
  submittingSpecification: PropTypes.bool,
};

export default compose(
  withReducer,
  withConnect,
)(SpecificationStep);
