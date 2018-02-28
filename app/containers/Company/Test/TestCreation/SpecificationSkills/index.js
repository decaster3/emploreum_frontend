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
import reducer from '../../../../SpecificationsSkills/reducer';
import {
  selectSpecificationList,
  selectSpecificationListStatus,
  selectChoosenSpecifications,
} from './selectors';

import SpecificationsSkillsTestCreation from '../../../../../components/SpecificationsSkills/Loadable';
import {
  addSkill,
  getSpecification,
  getSkills,
  addSpecificationWithSkills,
  deleteSpecificationFromChoosen,
  deleteSkillFromSpecification,
  clearReducer,
} from '../../../../SpecificationsSkills/actions';

export class SpecificationSkills extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillUnmount() {
    this.props.clearReducer();
  }
  render() {
    return (
      <SpecificationsSkillsTestCreation
        getSpecification={this.props.getSpecification}
        getSkills={this.props.getSkills}
        specificationListStatus={this.props.specificationListStatus}
        skillsListStatus={this.props.skillsListStatus}
        specificationList={this.props.specificationList}
        skillsList={this.props.skillsList}
        addSkill={this.props.addSkill}
        addSpecificationWithSkills={this.props.addSpecificationWithSkills}
        choosenSpecifications={this.props.choosenSpecifications}
        deleteSpecificationFromChoosen={this.props.deleteSpecificationFromChoosen}
        deleteSkillFromSpecification={this.props.deleteSkillFromSpecification}
        modal
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    choosenSpecifications: selectChoosenSpecifications(state),
    specificationList: selectSpecificationList(state),
    specificationListStatus: selectSpecificationListStatus(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSpecification: () => dispatch(getSpecification()),
    getSkills: () => dispatch(getSkills()),
    addSkill: (evt, ev) => dispatch(addSkill(evt, ev)),
    deleteSkillFromSpecification: (evt, ev) => dispatch(deleteSkillFromSpecification(evt, ev)),
    addSpecificationWithSkills: (evt) => dispatch(addSpecificationWithSkills(evt)),
    deleteSpecificationFromChoosen: (evt) => dispatch(deleteSpecificationFromChoosen(evt)),
    clearReducer: () => dispatch(clearReducer()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer(
  { key: 'specificationsSkillsTestCreation', reducer },
);

SpecificationSkills.propTypes = {
  clearReducer: PropTypes.func,
  getSpecification: PropTypes.func,
  getSkills: PropTypes.func,
  specificationListStatus: PropTypes.string,
  skillsListStatus: PropTypes.string,
  skillsList: PropTypes.object,
  specificationList: PropTypes.object,
  addSkill: PropTypes.func,
  addSpecificationWithSkills: PropTypes.func,
  deleteSpecificationFromChoosen: PropTypes.func,
  deleteSkillFromSpecification: PropTypes.func,
  choosenSpecifications: PropTypes.object,
};


export default compose(
  withReducer,
  withConnect,
)(SpecificationSkills);
