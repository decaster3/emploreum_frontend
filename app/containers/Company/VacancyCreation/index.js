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
import {
  selectSpecificationList,
  selectSpecificationListStatus,
  selectChoosenSpecifications,
} from './selectors';
import reducer from './reducer';
import VacancyCreationModal from '../../../components/Company/CompanyFinanceComponents/VacancyCreation/Loadable';
import {
  addSkill,
  getSpecification,
  getSkills,
  addSpecificationWithSkills,
  deleteSpecificationFromChoosen,
  deleteSkillFromSpecification,
  createVacancy,
} from './actions';

export class VacancyCreation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
  }
  render() {
    return (
      <div className="modal fade" id="modal-vacancy" tabIndex="-1" role="dialog" aria-labelledby="modal-label" aria-hidden="true">
        <div className="modal-dialog modal">
          <VacancyCreationModal
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
            submitSpecificationSkillsStep={this.props.submitSpecificationSkillsStep}
            submittingSpecification={this.props.submittingSpecification}
            createVacancy={this.props.createVacancy}
          />
        </div>
      </div>
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
    createVacancy: (evt) => dispatch(createVacancy(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'vacancyCreation', reducer });

VacancyCreation.propTypes = {
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
  submitSpecificationSkillsStep: PropTypes.func,
  createVacancy: PropTypes.func,
  submittingSpecification: PropTypes.bool,
  choosenSpecifications: PropTypes.object,
};


export default compose(
  withReducer,
  withConnect,
)(VacancyCreation);
